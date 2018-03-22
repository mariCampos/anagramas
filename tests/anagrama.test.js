const anagrama = require('../anagrama');

test('Dado uma letra, retorna apenas uma palavra', () => {
    var resposta = anagrama.formaAnagrama('m');
    expect(resposta).toMatch('m');
});

test('Dado uma palavra de duas letras, retornar 2 anagramas', () => {
  var resposta = anagrama.formaAnagrama('eu');
  expect(resposta).toMatch('eu ue');
});
