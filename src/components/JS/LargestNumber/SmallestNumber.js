// find the smallest numbers

const arr = [10, 50, 30, 80, 60];

let first = Infinity;
let second = Infinity;
let third = Infinity;
let fourth = Infinity;

for (let num of arr) {

  if (num < first) {
    fourth = third;
    third = second;
    second = first;
    first = num;

  } else if (num < second) {
    fourth = third;
    third = second;
    second = num;

  } else if (num < third) {
    fourth = third;
    third = num;

  } else if (num < fourth) {
    fourth = num;
  }
}

console.log("Smallest:", first);
console.log("Second Smallest:", second);
console.log("Third Smallest:", third);
console.log("Fourth Smallest:", fourth);

//Just flip the initial values from -Infinity to Infinity and change > to <.