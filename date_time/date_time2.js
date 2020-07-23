// https://learn.javascript.ru/task/get-week-day

'use strict';

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );

function getWeekDay(date) {
  return ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'][date.getDay()]
}