const readline = require('readline');
const anagrama = require('./anagrama');
const view = require('./view');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('palavra: ', (answer) => {
    // TODO: Log the answer in a database
    
    anagrama.permuta(answer);
    console.log(view.mostraAnagrama(answer));
    rl.close();
  });