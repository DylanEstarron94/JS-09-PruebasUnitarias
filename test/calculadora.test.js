const calculadora = require('../Calculadora');

//console.log(calculadora.suma);

test('Debe sumar numero a + b', () => {
    expect(calculadora.suma(10, 10)).toBe(20);
})

test('Debe restar a - b', () => {
    expect(calculadora.resta(10, 10)).toBe(0);
})

test('Debe multiplicar numero a * b', () => {
    expect(calculadora.mult(10, 10)).toBe(100);
})

test('Debe dividir numero a / b', () => {
    expect(calculadora.div(10, 10)).toBe(1);
})