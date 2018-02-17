'use strict';

var Clock = (function() {
  var EventEmitter = require('events').EventEmitter;
  var inherits = require('util').inherits;
  
  // Constructor
  var Clock = function() {
    var self = this;
  
    setInterval(function() {
      self.emit('tictac'); // this --> function (no Clock)
    }, 1000);
  }
  
  inherits(Clock, EventEmitter);
  
  Clock.prototype.theTime = function() {
    var date = new Date();
    var hrsAmPm = (date.getHours() > 12) ? (date.getHours() - 12) : date.getHours();
    var hours = addZero(hrsAmPm);
    var minutes = addZero(date.getMinutes());
    var seconds = addZero(date.getSeconds());
    var ampm = (date.getHours() < 12) ? 'am' : 'pm';
    var message = hours + ': ' + minutes + ': ' + seconds + ampm;

    function addZero(num) {
      return (num < 10) ? ('0' + num) : num;
    }
  
    console.log(message);
  }
  return Clock;
})();

module.exports = Clock;