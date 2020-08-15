const array = [1, [2, [3, [4, [5, 6]]]]];

console.log(getLength(array));

function getLength(array) {
  let count = 0;

  array.map((element) => {
    if (!Array.isArray(element)) {
      count += 1;
    } else {
      count += getLength(element);
    }
  });

  return count;
}
