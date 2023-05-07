var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift();
var salarioFixo = parseFloat(lines.shift());
var vendas = parseFloat(lines.shift());

var comissao = vendas*15/100;
var total = salarioFixo + comissao;

console.log('TOTAL = R$ '+total.toFixed(2));