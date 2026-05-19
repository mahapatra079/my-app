// array methods like map(), filter(), and reduce() are powerful tools for transforming and manipulating arrays in JavaScript.

const a = [1, 2, 3, 4];

//square of the elements
const b =  a.map(num => num * num);
console.log(b)

//divisible by 2
const c = b.filter(num => num % 2 === 0);
console.log(c)

// Sum of all elements in c
const d = c.reduce((sum,num) => sum + num,0);
console.log(d)

// Output:
// [1, 4, 9, 16]
// [4, 16]
// 20