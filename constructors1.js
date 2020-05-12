// https://learn.javascript.ru/task/calculator-constructor
'use strict';

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

function Calculator() {
  this.n1 = 0;
  this.n2 = 0;
  this.read = function() {
    [this.n1, this.n2] =
      prompt('Enter two numbers separated by comma').split(',').map(n => +n)
  };
  this.sum = function() {
    return this.n1 + this.n2
  };
  this.mul = function() {
    return this.n1 * this.n2
  }
}
