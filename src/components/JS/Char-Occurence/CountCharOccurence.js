const name = "amit";

let count = {};

for (let char of name) {

  if (count[char]) {
    count[char]++;
  } else {
    count[char] = 1;
  }

}

console.log(count);