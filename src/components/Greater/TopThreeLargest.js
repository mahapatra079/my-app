// Find Top 3 Largest Numbers

const arr = [10, 50, 30, 80, 60];

let first = -Infinity;
let second = -Infinity;
let third = -Infinity;

for (let num of arr) {

  if (num > first) {
    third = second;
    second = first;
    first = num;

  } else if (num > second) {
    third = second;
    second = num;

  } else if (num > third) {
    third = num;
  }
}

console.log(first, second, third);