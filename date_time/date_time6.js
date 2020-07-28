// https://learn.javascript.ru/task/format-date-relative

'user strict';

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate(date) {
  const diff = new Date - date;
  if (diff < 1000) return 'right now';
  if (diff < 60000) return `${ Math.round(diff / 1000) } sec. before`;
  if (diff < 60000 * 60) return `${ Math.round(diff / 60000) } min. before`;

  let d = [
    ('0' + date.getDate()).slice(-2),
    ('0' + (date.getMonth() + 1)).slice(-2),
    ('' + date.getFullYear()),
    ('0' + date.getHours()).slice(-2),
    ('0' + date.getMinutes()).slice(-2)
  ];
  return d.slice(0, 3).join('.') + ' ' + d.slice(-2).join(':')
}
