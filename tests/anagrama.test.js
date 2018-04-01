const anagrama = require('../anagrama');

test('Dado uma palavra de duas letras, retornar 2 anagramas', () => {
  var resposta = anagrama.formaAnagrama('eu');
  expect(resposta).toMatch('eu ue');
});
