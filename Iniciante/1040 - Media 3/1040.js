const input = require('fs').readFileSync('./stdin/file.txt', 'utf8');
const lines = input.split('\n');

const [primeiraNota, segundaNota, terceiraNota, quartaNota] = lines.shift().split(" ").map(value => parseFloat(value));

const media = ((primeiraNota * 2) + (segundaNota * 3) + (terceiraNota * 4) + (quartaNota * 1)) / 10;
console.log('Media: '+media.toFixed(1));

if (media >= 7.0) {
    console.log('Aluno aprovado.');
} else if (media < 5.0) {
    console.log('Aluno reprovado.');
} else if (media >= 5.0 || media <= 6.9) {
    console.log('Aluno em exame.');
    const notaExame = parseFloat(lines.shift());
    console.log('Nota do exame: '+notaExame.toFixed(1));

    const mediaFinal = (media+notaExame)/2;
    if(mediaFinal >= 5.0) {
        console.log('Aluno aprovado.');
    } else {
        console.log('Aluno reprovado.'); 
    }

    console.log('Media final: '+mediaFinal.toFixed(1));
}