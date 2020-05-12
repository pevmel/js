
'use strict';
// https://learn.javascript.ru/task/calculator
let calculator = {
  n1: 0,
  n2: 0,
  read() {
    [this.n1, this.n2] =
      prompt('Enter two numbers separated by comma').split(',').map(n => +n)
  },
  sum() {
    return this.n1 + this.n2
  },
  mul() {
    return this.n1 * this.n2
  }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
