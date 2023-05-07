var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores1 = lines.shift().split(" ");
var codigo1 = parseInt(valores1[0]);
var numPecas1 = parseInt(valores1[1]);
var valorUnit1 = parseFloat(valores1[2]);

var valores2 = lines.shift().split(" ");
var codigo2 = parseInt(valores2[0]);
var numPecas2 = parseInt(valores2[1]);
var valorUnit2 = parseFloat(valores2[2]);

var calc = numPecas1*valorUnit1 + numPecas2*valorUnit2;

console.log('VALOR A PAGAR: R$ '+calc.toFixed(2));