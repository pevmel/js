// https://learn.javascript.ru/task/get-seconds-today

'use strict';

alert(getSecondsToday());

function getSecondsToday() {
  const now = new Date();
  return (now.getHours() * 60 + now.getMinutes()) * 60 + now.getSeconds()
}