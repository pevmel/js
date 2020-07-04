// https://learn.javascript.ru/task/calculator-extendable
'use strict';

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

function Calculator() {
  this.operations = {t
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  };

  this.calculate = function(str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.operations[op] || isNaN(a) || isNaN(b)) return NaN;
    return this.operations[op](a, b);
  }

  this.addMethod = function(op, func) {
    this.operations[op] = func;
  }
}
