// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when type is SUM, a = 1.4 and b = 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 5 when type is SUM, a = 1.2 and b = 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when type is SUBTRACT, a = 1.4 and b = 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 5 when type is SUBTRACT, a = 6.7 and b = 1.7', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 6.7, 1.7), 5);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when type is DIVIDE, a = 1.4 and b = 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when type is DIVIDE, a = 1.4 and b = 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});

