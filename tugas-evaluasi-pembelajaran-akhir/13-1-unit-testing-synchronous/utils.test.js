const { generateRandomStringSync } = require('./utils');

describe('generateRandomStringSync', () => {
  // Skenario positif: Panjang string yang valid
  test('should return a string of the specified length', () => {
    const length = 10;
    const result = generateRandomStringSync(length);
    expect(result).toHaveLength(length);
  });

  // Skenario negatif: Panjang bukan angka
  test('should throw an error if length is not a number', () => {
    const length = 'invalid';
    expect(() => generateRandomStringSync(length)).toThrow(
      'Length must be a number'
    );
  });

  // Skenario negatif: Panjang kurang dari 1
  test('should throw an error if length is less than 1', () => {
    const length = 0;
    expect(() => generateRandomStringSync(length)).toThrow(
      'Length must be at least 1'
    );
  });
});
