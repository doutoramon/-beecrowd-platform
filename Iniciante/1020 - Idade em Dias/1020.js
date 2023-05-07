var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dias = parseInt(lines.shift());

var ano = parseInt(dias/365);
dias = dias % 365;

var mes = parseInt(dias/30);
dias = dias % 30;

console.log(ano+' ano(s)');
console.log(mes+' mes(es)');
console.log(dias+' dia(s)');