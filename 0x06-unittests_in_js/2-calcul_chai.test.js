import { describe, it } from '@jest/globals';

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should return 6 when rounding 1.4 and 4.5 and summing them', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 0 when rounding 1.4 and -1.4 and summing them', () => {
      expect(calculateNumber('SUM', 1.4, -1.4)).to.equal(0);
    });
  });

  describe('sUBTRACT', () => {
    it('should return -4 when rounding 1.4 and 4.5 and subtracting them', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 4 when rounding 5.6 and 2.1 and subtracting them', () => {
      expect(calculateNumber('SUBTRACT', 5.6, 2.1)).to.equal(4);
    });
  });

  describe('dIVIDE', () => {
    it('should return 0.2 when rounding 1.4 and 4.5 and dividing them', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('invalid operation', () => {
    it('should throw an error when an invalid operation is provided', () => {
      expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw(Error, 'Invalid operation');
    });
  });
});
