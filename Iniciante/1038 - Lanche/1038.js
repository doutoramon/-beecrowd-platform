const input = require('fs').readFileSync('./stdin/file.txt', 'utf8');
const lines = input.split('\n');

const value = lines.shift().split(" ").map(value => parseInt(value));
const codigo = value[0];
const quantidade = value[1];

switch(codigo) {
    case 1: {
        const valor = 4.00;
        const total = valor*quantidade;
        console.log('Total: R$ '+total.toFixed(2));
        break;
    }

    case 2: {
        const valor = 4.50;
        const total = valor*quantidade;
        console.log('Total: R$ '+total.toFixed(2));
        break;
    }

    case 3: {
        const valor = 5.00;
        const total = valor*quantidade;
        console.log('Total: R$ '+total.toFixed(2));
        break;
    }

    case 4: {
        const valor = 2.00;
        const total = valor*quantidade;
        console.log('Total: R$ '+total.toFixed(2));
        break;
    }

    case 5: {
        const valor = 1.50;
        const total = valor*quantidade;
        console.log('Total: R$ '+total.toFixed(2));
        break;
    }
}
