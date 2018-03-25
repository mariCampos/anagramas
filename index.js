const readline = require('readline');
const anagrama = require('./anagrama');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('palavra: ', (answer) => {
    // TODO: Log the answer in a database
    
    anagrama.permuta(answer);
    rl.close();
  });