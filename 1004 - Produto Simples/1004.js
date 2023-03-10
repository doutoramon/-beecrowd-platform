var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let primeiroValor = parseInt(lines.shift());
let segundoValor = parseInt(lines.shift());

let prod = primeiroValor * segundoValor;

console.log('PROD = '+prod);
