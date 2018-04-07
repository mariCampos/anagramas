
const view = require('./view');
module.exports = {

    permuta(letras) {
        //mando vetor de caracteres
        var letrasArray = letras.split('');
        var permutaCorrente = new Array();//recebe o vetor cujos elementos serão permutados
        this.formaAnagrama(letrasArray, 0, permutaCorrente);   
    },

    formaAnagrama(letras, indice, permutaCorrente) {
        var cont = 0;

        if (letras.length === indice) {
            cont++;
            view.montaAnagrama(permutaCorrente, cont);
            permutaCorrente = [];
        } else {
            letras.forEach(letra => {
                var achou = false;

                for(var j = 0; j < indice; j++) {
                    if (permutaCorrente[j] === letra) {
                        achou = true;
                    }
                }

                if (!achou) {
                    permutaCorrente[indice] = letra;
                    this.formaAnagrama(letras, indice + 1, permutaCorrente);
                }
            });
        }
       
    }
}