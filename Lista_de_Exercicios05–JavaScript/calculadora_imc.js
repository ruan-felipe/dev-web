const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('Insira a altura em meteros: ', (altura) => {
  
  rl.question('Insira o peso em kilogramas: ', (peso) => {
    
    let alturaNum = parseFloat(altura);
    let pesoNum = parseFloat(peso);
    const imc = (peso / (altura * altura));
    console.log(`O imc é: ${imc}`);
    rl.close();
  });
});
