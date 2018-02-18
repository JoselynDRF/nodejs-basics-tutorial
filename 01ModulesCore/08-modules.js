'use strict';

var myData = require('./my-data');
var Clock = require('./clock-es5');
var newClock = new Clock();

console.log(myData.name, myData.email);

newClock.on('tictac', function() {
  newClock.theTime();
})