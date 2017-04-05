'use strict';

var spawn = require('child_process').spawn;
var path = require('path');
var fs = require('fs');
var Player = require('player');
var _ = require('underscore');
var yap = require('youtube-audio-player');

var EffectsMap = require('./effects-map.json');
var EffectsSet = {};

if (process.argv && process.argv.length > 2) {
  var masterCommand = process.argv[2];
  var masterOptions = process.argv.slice(3);

  var cmdString = process.argv.slice(2).join(' ');
  
  /**
   * We need a default effect, which is obviously, random or "default"
   */
  var effectsKey = 'default';

  let effectKeys = _.keys(EffectsMap);
  effectsKey = effectKeys[ Math.floor(Math.random() * effectKeys.length)];
  console.log('EF key', effectsKey);
  /**
   * Now let's search for a matching pattern
   */
  effectKeys.forEach(function (key) {
    var exp = new RegExp(key, 'i');
    if (exp.test(cmdString))  {
      effectsKey = key;
    }
  });
  let defaultEffectSet = EffectsMap['default'];
  var selectedEffectSet = EffectsMap[effectsKey];

  _.extend(EffectsSet, defaultEffectSet, selectedEffectSet);

} else {
  console.log('Yo, I need a command to run and you aint givin me any!');
  return false;
}

// var filePath = path.join(__dirname, 'audio/', EffectsSet.audio);

console.log('\n\n*********** ' + EffectsSet.lines.title.toUpperCase() + ' **************');

var asciiArtFilePath = path.join(__dirname, 'art/', EffectsSet.ascii);
var asciiArt = fs.readFileSync(asciiArtFilePath).toString();
console.log(asciiArt + '\n');

// var player = new Player(filePath);
// player.play(function (err, player) {});

yap.play({ url: EffectsSet.audio });

setTimeout(function () {
  console.log(EffectsSet.lines['entry-lines'].values[0]);
}, 500);

setTimeout(function () {
  console.log(EffectsSet.lines['entry-lines'].values[1]);
}, 3000);

setTimeout(function () {
  console.log('******************************************************************');
}, 4000);

setTimeout(function () {

  try {

    console.log(EffectsSet.lines['command-start-lines'].values[1]);
    console.log(EffectsSet.lines['command-start-lines'].values[0]);

    var commandProcess = spawn(masterCommand, masterOptions);
    commandProcess.on('close', function (code) {
      //stop the music
      console.log(EffectsSet.lines['post-execution-lines'].values[0]);
      // player.stop();
      yap.stop();
    });

    commandProcess.stdout.on('data', function (data) {
      console.error(data.toString());
    });
    commandProcess.stderr.on('data', function (err) {
      console.error(err.toString());
    });
  } catch (error) {
    console.log('OH', error, error.stack);
  }


}, 6000);