const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when rounding 1.4 and 4.5 and summing them', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when rounding 1.4 and -1.4 and summing them', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, -1.4), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when rounding 1.4 and 4.5 and subtracting them', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 3 when rounding 5.6 and 2.1 and subtracting them', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.6, 2.1), 4);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when rounding 1.4 and 4.5 and dividing them', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Invalid operation', () => {
    it('should throw an error when an invalid operation is provided', () => {
      assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), /Invalid operation type/);
    });
  });
});
