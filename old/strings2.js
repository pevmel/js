// https://learn.javascript.ru/task/check-spam

'use strict';

alert( checkSpam('buy ViAgRA now') ) //== true
alert( checkSpam('free xxxxx') ) //== true
alert( checkSpam("innocent rabbit")) //== false

function checkSpam(str) {
  return ( str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx') )
}
