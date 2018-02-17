'use strict';

class Clock {
  constructor() {
    setInterval(() => {
      this.theTime();
    }, 1000);
  }

  theTime() {
    var date = new Date(),
        hrsAmPm = (date.getHours() > 12) ? (date.getHours() - 12) : date.getHours(),
        hours = addZero(hrsAmPm),
        minutes = addZero(date.getMinutes()),
        seconds = addZero(date.getSeconds()),
        ampm = (date.getHours() < 12) ? 'am' : 'pm',
        message = `${hours}:${minutes}:${seconds}${ampm}`;

    function addZero(num) {
      return (num < 10) ? ('0' + num) : num;
    }
  
    console.log(message);
  }
}

module.exports = Clock;