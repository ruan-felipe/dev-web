const { reverse } = require('dns');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Insira a palavra a ser checada: ', (palavra1) => {
    

    function reverseString(palavra2) {
        return palavra2.split("").reverse().join("");
    }

    let palavra2 = reverseString(palavra1);


    if (palavra2 === palavra1){
        
        console.log(`A palavra é palindromo`);
    }

    else{
        console.log(`A palavra não é palindromo`);
    }

    rl.close();

});
