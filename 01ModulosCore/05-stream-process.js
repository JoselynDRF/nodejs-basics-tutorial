'use strict';

const stdin = process.stdin;
const stdout = process.stdout;

const person = {
  name: null,
  age: 0
}

const saveAge = age => {
  person.age = age;

  if (person.age >= 18) {
    stdout.write(person.name + ' es mayor de edad, tiene ' + person.age + ' años\n');
  } else {
    stdout.write(person.name + ' es menor de edad, tiene ' + person.age + ' años\n');
  }

  process.exit();
}

const saveName = name => {
  person.name = name;

  var question = 'Hola ' + person.name + '! Cuantos años tienes?';
  quiz(question, saveAge);
}

const quiz = (question, callback) => {
  stdin.resume(); // Leer lo que el usuario escriba
  stdout.write(question + ': ');

  stdin.once('data', (response) => {
    callback(response.toString().trim());
  })
}

stdin.setEncoding('utf8');
quiz('Como te llamas?', saveName);