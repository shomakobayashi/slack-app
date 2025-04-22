import { Calculator } from '../src/calculator';

describe('Calculator', () => {
  const calculator = new Calculator();
  
  test('adds two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  
  test('subtracts two numbers', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });
  
  test('multiplies two numbers', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });
});
