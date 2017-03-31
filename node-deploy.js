'use strict';

var spawn = require('child_process').spawn;
var path = require('path');
var Player = require('player');
var musicFilename = 'mission-impossible-soundtrack.mp3';

var filePath = path.join(__dirname, musicFilename);

console.log('\n\n*********** DEPLOYMENT IMPOSSIBLE **************');
console.log(`
                  ,--.!,
               __/   -*-
             ,d08b.  '|'
             0088MM     
             '9MMP'     
`);

// create player instance 
var player = new Player(filePath);
// play now and callback when playend 
player.play(function(err, player){});

// var musicCommand = '/usr/bin/afplay';
// var musicCommand = './node_modules/player/bin/cli';

// var musicProcess = spawn(musicCommand, ['play', filePath]);

setTimeout(function () {
  console.log('Mr. Hunt, this isn\'t mission difficult, it\'s mission impossible.');
}, 500);

setTimeout(function () {
  console.log('This log will self-destruct in five seconds. Good luck!\n');
}, 3000);

setTimeout(function () {
  console.log('******************************************************************');
}, 4000);

setTimeout(function () {


  if (process.argv && process.argv.length > 2) {
    try {
      var masterCommand = process.argv[2];
      var masterOptions = process.argv.slice(3);
      console.log('Setting up the honeypot', masterCommand, masterOptions.join(' '));

      console.log('Let\'s do this! One...two...three...toast...TOAST!\n');
      console.log('Intercepting com...\n');

      var commandProcess = spawn(masterCommand, masterOptions);
      commandProcess.on('close', function (code) {
        //stop the music
        console.log('You command is done now sir, stopping the music');
        // musicProcess.kill('SIGINT');
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
  } else {
    console.log('Yo, I need a command to run and you aint givin me any!');
  }

}, 6000);