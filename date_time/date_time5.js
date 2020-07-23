// https://learn.javascript.ru/task/get-seconds-to-tomorrow

'use strict';

alert(getSecondsToTomorrow());

function getSecondsToTomorrow() {
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return Math.round((tomorrow - now) / 1000)
}