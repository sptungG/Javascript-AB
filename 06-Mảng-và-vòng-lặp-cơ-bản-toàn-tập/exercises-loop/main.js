// 1. cho 1 mảng gồm nhiều giá trị [""," ",1,0,100,false,null,true,undefined,"js",[1,2,3],[],{},NaN]. Viết ctr loại bỏ giá trị falsy ra khỏi mảng null, "", undefined, NaN, false, 0
// 2. cho 1 mảng phức tạp [[1,2,3,[false,null]],[1,5,6,["js"]], [888,99,[777]]]. và kết quả mong muốn là [1,2,3,false,null,1,5,6,"js",888,99,777]
const arr = [2, "", " ", 1, 0, 100, false, null, true, undefined, "js", [1, 2, 3], [], {}, NaN];
// new Boolean
const filterFalsy = arr.filter((item) => Boolean(item));
console.log(filterFalsy); // [2, " ", 1, 100, true, "js", [1, 2, 3], [], {}];
// 2.
const complexArr = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ["js"]],
  [888, 99, [777]],
];
// C1: phg thức có sẵn
const result = complexArr.flat(2);
console.log(result); //(12) [1, 2, 3, false, null, 1, 5, 6, "js", 888, 99, 777]
// C2: Đệ quy

// 3. Đảo ngc số ng 456 -> 654, -879 -> -978
// Math.sign(123) -> 1
// Math.sign(-123) -> -1
function reverseNumber(number) {
  // convert to String
  // split("")
  // reverse()
  // join("")
  // parseInt
  // * Math.sign(number)
  return parseInt(number.toString().split("").reverse().join("")) * Math.sign(number);
}
console.log(reverseNumber(-12345));
//4. viết ctr fizzBuzz, với đầu vào là 1 số nguyên kiểm tra từ 1 đến số nguyên đó
// nếu số chia hết cho 2 thì in ra Fizz
// nếu số chia hết cho 3 thì in ra Buzz
// nếu số chia hết cho 2 và 3 thì in ra FizzBuzz
function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    } else if (i % 2 === 0) {
      console.log("Fizz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    }
  }
}
fizzBuzz(15);
// 5. cho 1 chuỗi bất kì, đếm số lượng kí tự vowels có trong chuỗi đó
// vowels: u e o a i
// evondev -> 3
function countVowels(string) {
  let count = 0;
  const character = "ueoai";
  for (const c of string.toLowerCase()) {
    if (character.includes(c)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("evondev"));
// 6. Cho 1 mảng các giá trị [1,2,2,2,3,3,3,4,4,5,5,5,5,7,7,7,6,6,6,8,8,8,9,9,9]
// viết 1 function trả về 1 mảng với các giá trị unique.
// kết quả ở trên sẽ là [1,2,3,4,5,6,7,8,9]
function unique(array) {
  // C1:
  let result = [];
  if (!Array.isArray(array)) return result;
  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result.sort((a, b) => (a > b ? 1 : -1));
  // C2: -> Nâng cao
}
console.log(unique([1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 4, 45, 5, 7, 7, 7, 6, 6, 6, 8, 8, 8, 9, 9, 9, 10]));
// 7. Viết function xử lí 1 mảng lớn thành nhiều mảng con dựa vào số nguyên đầu vào
// ([1,2,3,4,5],2) -> [1,2],[3,4],[5]
function splitArray(array, number) {
  let result = [];
  // slice(start, end);
  // [1,2,3,4,5]
  let index = 0;
  while (index < array.length) {
    // console.log(array.slice(index,number + index));
    result.push(array.slice(index, index + number));
    index += number;
  }
  return result;
}
console.log(splitArray([1, 2, 3, 4, 5], 2));
// console.log([1, 2, 3, 4, 5].slice(4, 6));
// index = 0, number = 2 -> array.slice(0,2) -> [1,2]
// index = 2, number = 4 -> array.slice(2,4) -> [3,4]
// index = 4, number = 6 -> array.slice(4,6) -> [5]


