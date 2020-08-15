// Author: Abdus Salam Zaigirdar
// E-mail: riyadzaigir280@gmail.com
// Phone: 01754130251

let ages = { eagle: 13, sparrow: 15, robin: 12, bluebird: 11 };

console.log(getSum(ages));

function getSum(object) {
  let sum = 0;
  Object.keys(object).map((key) => (sum += object[key]));

  return sum;
}
