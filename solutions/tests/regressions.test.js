const Calculator = require('../01-js/hard/calculator');
const isAnagram = require('../01-js/easy/anagram');
const totals = require('../01-js/easy/expenditure-analysis');

test('calculator handles decimal divisors, unary signs and precedence', () => {
  const calc = new Calculator();
  for (const [input, result] of [['1 / 0.5', 2], ['1 / .25', 4], ['-(2 + 3) * -2', 10], ['8 / 2 / 2', 2]]) {
    calc.calculate(input);
    expect(calc.getResult()).toBe(result);
  }
});

test('invalid expressions and computed zero divisors preserve the last result', () => {
  const calc = new Calculator();
  calc.add(7);
  for (const input of ['1/(1-1)', '5 + abc', '1 2', '1/*2*/+3', '', '2**3', '1.2.3', ')1(', 'Infinity']) {
    expect(() => calc.calculate(input)).toThrow();
    expect(calc.getResult()).toBe(7);
  }
});

test('anagrams ignore case and whitespace while retaining punctuation', () => {
  expect(isAnagram('Dormitory', 'Dirty room')).toBe(true);
  expect(isAnagram('ab!', 'ab')).toBe(false);
});

test('category totals handle object property names as ordinary categories', () => {
  expect(totals([{ category: '__proto__', price: 2 }, { category: 'constructor', price: 3 }, { category: '__proto__', price: 4 }])).toEqual([
    { category: '__proto__', totalSpent: 6 }, { category: 'constructor', totalSpent: 3 },
  ]);
});
