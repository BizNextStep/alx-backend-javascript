// 0x02-ES6_classes/100-evcar.js
import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const prototype = Object.getPrototypeOf(this);
    const clonedCar = Object.create(prototype);
    clonedCar._brand = this._brand;
    clonedCar._motor = this._motor;
    clonedCar._color = this._color;
    return clonedCar;
  }
}
