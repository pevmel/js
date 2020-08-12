// https://learn.javascript.ru/task/output-single-linked-list

'use strict';

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printListCycle(list);
printListRec(list);

function printListCycle(list) {
  let arr = [];
  let curList = list;
  do  {
    arr.push(curList.value);
    curList = curList.next
  } while (curList != null)
  alert(arr);
}

function printListRec(list) {
  alert(list.value);
  if (list.next != null) printListRec(list.next);
}
