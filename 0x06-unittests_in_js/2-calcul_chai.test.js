// 2-calcul_chai.test.js

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when type is SUM, a = 1.4 and b = 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 5 when type is SUM, a = 1.2 and b = 3.7', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when type is SUBTRACT, a = 1.4 and b = 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 5 when type is SUBTRACT, a = 6.7 and b = 1.7', () => {
      expect(calculateNumber('SUBTRACT', 6.7, 1.7)).to.equal(5);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when type is DIVIDE, a = 1.4 and b = 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.001);
    });

    it('should return "Error" when type is DIVIDE, a = 1.4 and b = 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});

