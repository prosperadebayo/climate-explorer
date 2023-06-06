let HighestNumb = (number) => {
  let hight = Math.max(...number);
  let low = Math.min(...number);
  return `the highest number ${hight} and the lowest number is ${low}`;
};
let totalAr = (array) => {
  let tot = array;
  return `The total array length is ${tot.length}`;
};
console.log(totalAr([1, 2, 3, 6, 7, 8, 9, 10]));
