const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculoBahskara(ladoANum, ladoBNum, ladoCNum) {
    const p = ((ladoBNum *ladoBNum) - (4 * ladoANum * ladoCNum));

    if ( p < 0){
        return(console.log(`Sem raiz real`));
    }

    else if ( p == 0){
        const result = ( - ladoBNum) / (2 * ladoANum);
        return(console.log(`Uma raiz real que vale ${result}`));
    }
    
    else{
        const raiz1 = (( - ladoBNum) + Math.sqrt(p))/ (2 * ladoANum);
        const raiz2 = (( - ladoBNum) - Math.sqrt(p))/ (2 * ladoANum);

        return(
            console.log(`Primeira raiz real que vale ${raiz1}`),
            console.log(`segunda raiz real que vale ${raiz2}`)
        );
        
    }
}

rl.question('Insira o valor de A: ', (ladoA) => {
    rl.question('Insira o valor de B: ', (ladoB) => {
        rl.question('Insira o valor de C: ', (ladoC) => {

        let ladoANum = parseFloat(ladoA);
        let ladoBNum = parseFloat(ladoB);
        let ladoCNum = parseFloat(ladoC);

   
        let area = calculoBahskara(ladoANum, ladoBNum, ladoCNum);

        rl.close();
        });
    });
});