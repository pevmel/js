// https://learn.javascript.ru/task/filter-anagrams
'use strict';

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

function aclean(arr) {
  const map = new Map(arr.map(item => [item.toLowerCase().split('')
                                   .sort().join(''), item]));
  return [...map.values()]
}
