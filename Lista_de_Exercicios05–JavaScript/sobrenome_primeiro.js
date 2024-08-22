
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Please enter your height in meters: ', (nomeCompleto) => {
  
    const nameArr = nomeCompleto.split(" ");
    const primeiroNome = nameArr[0];
    const ultimoNome = nameArr[1];

    console.log(`${ultimoNome}, ${primeiroNome}`)

    rl.close();
});
