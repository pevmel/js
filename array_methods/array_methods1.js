// https://learn.javascript.ru/task/camelcase
'use strict';

function camelize(str) {
  return str.split('-')
            .map((item, index) => index == 0 ? item : capitalize(item))
            .join('');
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));
