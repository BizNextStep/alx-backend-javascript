// 0x02-ES6_classes/5-building.js
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (new.target === Building) {
      throw new TypeError('Building is an abstract class and cannot be instantiated directly');
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
