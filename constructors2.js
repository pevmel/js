https://learn.javascript.ru/task/accumulator

'use strict';

let accumulator = new Accumulator(1);

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
      this.value += +prompt('Add to value');
    }
}
