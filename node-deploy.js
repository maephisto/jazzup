'use strict';

var spawn = require('child_process').spawn;
var path = require('path');
var Player = require('player');
var _ = require('underscore');
var musicFilename = 'mission-impossible-soundtrack.mp3';

var EffectsMap = require('./effects-map.json');
var EffectsSet = null;

if (process.argv && process.argv.length > 2) {
  var masterCommand = process.argv[2];
  var masterOptions = process.argv.slice(3);

  var cmdString = process.argv.slice(2).join(' ');
  
  var effectsKey = 'default';
  //now let's search for a matching pattern
  _.keys(EffectsMap).forEach(function (key) {
    var exp = new RegExp(key, 'i');
    if (exp.test(cmdString))  {
      effectsKey = key;
    }
  });

  EffectsSet = EffectsMap[effectsKey];

} else {
  console.log('Yo, I need a command to run and you aint givin me any!');
  return false;
}

var filePath = path.join(__dirname, 'audio/', musicFilename);

console.log('\n\n*********** ' + EffectsSet.lines.title.toUpperCase() + ' **************');
console.log(`
                  ,--.!,
               __/   -*-
             ,d08b.  '|'
             0088MM     
             '9MMP'     
`);

var player = new Player(filePath);
player.play(function (err, player) {});

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
    // console.log('Setting up the honeypot', masterCommand, masterOptions.join(' '));

    console.log(EffectsSet.lines['command-start-lines'].values[1]);
    console.log(EffectsSet.lines['command-start-lines'].values[0]);

    var commandProcess = spawn(masterCommand, masterOptions);
    commandProcess.on('close', function (code) {
      //stop the music
      console.log(EffectsSet.lines['post-execution-lines'].values[0]);
      player.stop();
    });

    // musicProcess.stderr.on('data', function (err) {
    //   console.error('error playing music: ' + err);
    // });
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