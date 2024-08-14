const { generateRandomString } = require('./utils');

describe('generateRandomString', () => {
  // Skenario positif: Panjang string yang valid
  test('should call callback with a string of the specified length', (done) => {
    const length = 10;
    generateRandomString(length, (error, result) => {
      expect(error).toBeNull();
      expect(result).toHaveLength(length);
      done();
    });
  });

  // Skenario negatif: Panjang bukan angka
  test('should call callback with an error if length is not a number', (done) => {
    const length = 'invalid';
    generateRandomString(length, (error, result) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Length must be a number');
      expect(result).toBeUndefined();
      done();
    });
  });

  // Skenario negatif: Panjang kurang dari 1
  test('should call callback with an error if length is less than 1', (done) => {
    const length = 0;
    generateRandomString(length, (error, result) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Length must be greater than 0');
      expect(result).toBeUndefined();
      done();
    });
  });
});
