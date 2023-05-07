var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raioEsfera = parseFloat(lines.shift());
var raio = Math.pow(raioEsfera, 3); 
const pi = 3.14159;

var volume = (4.0/3) * pi * raio;

console.log('VOLUME = '+volume.toFixed(3));