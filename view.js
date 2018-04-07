const palavras = [];
module.exports = {

    montaAnagrama(anagrama, cont) {

        var novaPalavra = '';
        anagrama.forEach(element => {
            novaPalavra += element;
        });
        palavras.push(novaPalavra);
    },

    mostraAnagrama(palavra) {
      var linha = '';
      var limite = palavras.length / palavra.length;
      var contador = 0;
      var resultado = '';

      palavras.forEach(anagrama => {
        linha += anagrama + ' ';
        contador++;

        if (contador === limite) {
            resultado += linha + '\n';
              contador = 0;
              linha = '';
        }
      })

      return resultado;
    }
}