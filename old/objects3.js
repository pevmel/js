// https://learn.javascript.ru/task/sum-object
'use strict';

let salaries = {
  John: 'nothing',
  Ann: 160,
  Pete: 130
};
alert( fieldsSummary(salaries) );
salaries = {};
alert( fieldsSummary(salaries) );

function fieldsSummary(obj) {
  let summary = 0;
  for (let key in obj) {
    console.log( Number(obj[key]) );
    if ( !isNaN(obj[key]) ) summary += obj[key];
  }
  return summary;
}
