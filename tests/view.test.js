const view = require('../view');
const anagrama = require('../anagrama');

test('Dado um conjunto de anagramas, mostrar a sequencia certa', () => {
    anagrama.permuta('roe');
    expect(view.mostraAnagrama('roe')).toMatch('roe reo \nore oer \nero eor');
});

