// https://learn.javascript.ru/task/output-single-linked-list-reverse

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

printReverseListCycle(list);
alert(reverseListRec(list));

function printReverseListCycle(list) {
  let arr = [];
  let curList = list;
  do  {
    arr.push(curList.value);
    curList = curList.next
  } while (curList != null)
  alert(arr.reverse());
}

function reverseListRec(list) {
  if (list.next == null) return [list.value];
  let arr = reverseListRec(list.next);
  arr.push(list.value);
  return arr;
}
