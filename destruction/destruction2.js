// https://learn.javascript.ru/task/max-salary

'use strict';

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert(topSalary(salaries));

function topSalary(salaries = {}) {
  if (salaries == {}) return null;
  let maxSalary = 0;
  let employee = null;
  for (const [key, value] of Object.entries(salaries)) {
    if (value > maxSalary) {
      maxSalary = value;
      employee = key;
    }
  }
  return employee;
}