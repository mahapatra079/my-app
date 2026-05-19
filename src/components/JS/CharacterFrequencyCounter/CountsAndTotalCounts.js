// let factset = “abcdba” how many counts are and total counts

let factset = "abcdba";
let count = {}

for(let char of factset){
  if(count[char]){
    count[char]++
  }else {
    count[char] = 1
  }
} 

console.log(count)

let total = 0;
for(let key in count){
  total += count[key];
}
console.log(total)

// Each character count: { a: 2, b: 2, c: 1, d: 1 }
// Total count: 6

