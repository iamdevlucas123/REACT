//Lembrar de verificar se o jest esta nos scripts do package.json
//E lembrar que o bable precisa ser usado para transpilar os testes pois o código não estava conseguindo ser lido

import { soma, ehPar } from './math';

test("Soma os dois números corretamente", () => {
    expect(soma(2, 5)).toBe(7);
});

test("verifica se o numero é par", () => {
    expect(ehPar(4)).toBe(true);
    expect(ehPar(3)).toBe(false);
})