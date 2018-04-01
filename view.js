const palavras = [];
module.exports = {

    montaAnagrama(anagrama, cont) {

        var novaPalavra = '';
        for(var i = 0; i < anagrama.length; i++) {
            novaPalavra += anagrama[i];
        }
        palavras.push(novaPalavra);
    },

    mostraAnagrama(palavra) {
      var linha = '';
      var limite = palavras.length / palavra.length;
      var contador = 0;
      var resultado = '';

      for(var i = 0; i < palavras.length; i++) {
          linha += palavras[i] + ' ';
          contador++;

          if (contador === limite) {
              resultado += linha + '\n';
                contador = 0;
                linha = '';
          }
      }
      return resultado;
    }
}