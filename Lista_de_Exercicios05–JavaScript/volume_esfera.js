const readline = require('readline');

var pie = Math.PI;


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('Insira o raio da esfera em meteros: ', (raio) => {
  
    let raioNum = parseFloat(raio);
    const volume = (4/3) * (raio * raio * raio) * pie;
console.log(`O volume é: ${volume}`);
rl.close();
});
