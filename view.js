module.exports = {

    mostraAnagrama(anagrama, cont) {

        var novaPalavra = '';
        for(var i = 0; i < anagrama.length; i++) {
            novaPalavra += anagrama[i];
        }
        console.log(novaPalavra);
    }
}