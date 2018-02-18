'user strict';

const buffer = new Buffer(100);
const buffer2 = new Buffer(26);
const string = '\u00bd + \u00bc = \u00be'; // --> 1/2 + 1/4 = 3/4

buffer.write('abcd', 0, 4, 'ascii');
console.log(
  buffer,
  buffer.toString('ascii'),
  string,
  string.length + ' caracteres',
  Buffer.byteLength(string, 'utf8') + ' bytes',
  buffer2.length
);

for (var i=0; i < buffer2.length; i++) {
  buffer2[i] = i + 97; // 96 in ASCII is "a"
}

console.log(buffer2.toString('ascii'));