const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('Insira a frase a ser analisada: ', (minhaString) => {
  
    var spaceCount = (minhaString.split(" ").length - 1);
    console.log("Tem " + spaceCount + " espaços em branco.")
rl.close();
});
