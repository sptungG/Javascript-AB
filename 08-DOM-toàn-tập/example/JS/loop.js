// ------------------------------- -------------------------------
// LOOP
// vòng lặp kết thức hoặc vô tận
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < numbers.length; index++) {
  // nếu giá trị 8 thì dừng vòng lặp
  // if(numbers[index] == 8) break;
  // console.log(numbers[index]);
  //
  // nếu giá trị 8 thì bỏ qua giá trị đó
  if (numbers[index] == 8) continue;
  console.log(`The value is ${numbers[index]}`);
}

// ------------------------------- -------------------------------
for (let index = numbers.length - 1; index >= 0; index--) {
  console.log(`reverse_ The value is ${numbers[index]}`);
}
// ------------------------------- -------------------------------
// Nested Loop
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(`reverse_ The value is ${numbers[i]}`);
  for (let j = 0; j < numbers.length / 3; j++) {
    console.log(j);
  }
}
// PROBLEM: lặp nhiều nếu input lơn, tốn tài nguyên -> hiểu input, và áp dụng thuật toán
// có thể làm với mảng 2 chiều: [[1,2,3],[3,4,5]]
// ------------------------------- -------------------------------
// 1. Sao chép mảng dùng for
let newArr = [];
for (let i = 0; i < numbers.length; i++) {
  newArr.push(numbers[i]);
}
console.log(newArr);
// 2. Đảo ngc từ "i love"
const str = "i love";
let reverseStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverseStr = reverseStr + str[i];
}
console.log(reverseStr);
// ------------------------------- -------------------------------
// while && do while
// while (condition) {
//   code
// }
let number = 1;
while (number < 10) {
  console.log(`Number is ${number}`);
  number++;
}
// do {
// CODE
// } while (condition);
let number2 = 1;
do {
  console.log(`Number2 is ${number2}`);
  number2++;
} while (number2 < 10);
// ------------------------------- -------------------------------
// for of ARRAY, String
// for in
// for (const iterator of object) {
//  (value of array)
//  CODE
// }

let a = [];
for (let value of numbers) {
  value += 10;
  // console.log(value);
  a.push(value);
}
console.log(a);
