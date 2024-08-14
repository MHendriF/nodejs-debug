const { generateRandomStringProm } = require('./utils');

describe('generateRandomStringProm', () => {
  // Skenario positif: Panjang string yang valid
  test('should resolve with a string of the specified length', () => {
    const length = 10;
    return generateRandomStringProm(length).then((result) => {
      expect(result).toHaveLength(length);
    });
  });

  // Skenario negatif: Panjang bukan angka
  test('should reject with an error if length is not a number', () => {
    const length = 'invalid';
    return generateRandomStringProm(length).catch((error) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Length must be a number');
    });
  });

  // Skenario negatif: Panjang kurang dari 1
  test('should reject with an error if length is less than 1', () => {
    const length = 0;
    return generateRandomStringProm(length).catch((error) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Length must be greater than 0');
    });
  });
});
