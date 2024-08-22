const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isAnagram(str1, str2) {
  
	str1 = str1.replace(/\s/g, '').toLowerCase()
	str2 = str2.replace(/\s/g, '').toLowerCase()
	console.log(str1, str2)
  
	if (str1.length !== str2.length) {
	  return false
	}
  
	str1 = str1.split('').sort().join('')
	str2 = str2.split('').sort().join('')
  
  
	return str1 === str2
}

rl.question('Palavra 1: ', (str1) => {
  rl.question('Palavra 2: ', (str2) => {
    
    const check = isAnagram(str1, str2);
    
    if (check == false){
        console.log('Não é um anagrama');
    }
    else{
        console.log('É um anagrama');

    }

    rl.close();
  });
});
