'use strict';

const EventEmitter = require('events').EventEmitter;
const inherits = require('util').inherits;

const Clock = function() {
  var self = this;

  setInterval(() => {
    self.emit('tictac');
  }, 1000);
}

inherits(Clock, EventEmitter);

Clock.prototype.theTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const message = hours + ': ' + minutes + ': ' + seconds;

  console.log(message);
}

const newClock = new Clock();

newClock.on('tictac', () => {
  newClock.theTime();
})