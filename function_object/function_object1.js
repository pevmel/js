// https://learn.javascript.ru/task/counter-inc-dec

'use strict';

function makeCounter() {

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  counter.set = value => counter.count = value;

  counter.decrease = () => --counter.count;

  return counter;
}

function makeCounter2() {
  let count = 0;

  function counter() {
    return count++;
  };

  counter.set = value => count = value;

  counter.decrease = () => --count;

  return counter;
}


// let counter = makeCounter();
//
// alert( counter() );
// alert( counter() );
//
// counter.set(5);
// alert( counter() );
//
// alert( counter.decrease() );
// alert( counter.decrease() );

let counter = makeCounter2();

alert( counter() );
alert( counter() );

counter.set(5);
alert( counter() );

alert( counter.decrease() );
alert( counter.decrease() );