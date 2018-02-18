'use strict';

const EventEmitter = require('events').EventEmitter;
const pub = new EventEmitter();

pub.on('myevent', (message) => {
  console.log(message);
});

pub.once('myevent', (message) => {
  console.log('Se emite la primera vez: ' + message);
})

pub.emit('myevent', 'Soy un emisor de eventos');
pub.emit('myevent', 'Volviendo a emitir');
pub.removeAllListeners('myevent');
pub.emit('myevent', 'Volviendo a emitir después de remover');