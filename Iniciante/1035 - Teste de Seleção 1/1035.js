var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A,B,C,D] = lines.shift().split(" ").map(v => parseInt(v));

let CD = C+D;
let AB = A+B;
let resto = A % 2;

if((B>C)&&(D>A)&&(CD>AB)&&(C&&D>=0)&&(resto===0)){
    console.log("Valores aceitos");
}else {
    console.log("Valores nao aceitos");
}