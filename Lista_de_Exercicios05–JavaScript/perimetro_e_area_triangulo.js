const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculoArea(ladoANum, ladoBNum, ladoCNum) {
    const p = (ladoANum + ladoBNum + ladoCNum)/2;
    const valorArea = Math.sqrt(p * (p-ladoANum) * (p-ladoBNum) *(p-ladoCNum));
  return (valorArea);
}

rl.question('Insira o lado A: ', (ladoA) => {
    rl.question('Insira o lado B: ', (ladoB) => {
        rl.question('Insira o lado C: ', (ladoC) => {

        let ladoANum = parseFloat(ladoA);
        let ladoBNum = parseFloat(ladoB);
        let ladoCNum = parseFloat(ladoC);

        const perimetro = ladoANum + ladoBNum + ladoCNum;
        
        let area = calculoArea(ladoANum, ladoBNum, ladoCNum);

        // Output the result
        console.log(`O perimetro é de ${perimetro} unidades de medida.` )
        console.log(`A área é de: ${area} unidades de medida.`);

        // Close the readline interface
        rl.close();
        });
    });
});