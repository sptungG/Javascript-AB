## _Chương 6: Mảng và vòng lặp cơ bản toàn tập_

# Bài 55-55.5: Giới thiệu về mảng

```js
// Array: mảng, lưu trữ danh sách, chứa các phần tử
// 2 cách tạo mảng
// * array literal

const student1 = [];

// ** constructor
const student2 = new Array();
//Example: [0, false, undefined, "string", ["tung", 10, 11, ...],..]
// [1,2,3,4,5] ["a", "b", "ssss"], [false, true]
// empty array: []

// index: vị trí của phần tử (giá trị) trong mảng, bắt đầu từ 0
// length: số lượng phần tử
// truy xuất trong mảng student1[index]
const students = ["an", "minh", "thai", "tung", "trung"];
console.log(students[0]);
console.log(students[5]); //undefined
console.log(students[students.length - 1]); // lây phần tử cuối
```

# Bài 56-57-57.5: Các phương thức trong mảng

```js
// * length
console.log(students.length); //5
// ** reverse -> đảo ngược giá trị trong mảng
// console.log(students.reverse()); // ["trung", "thanh", "name", "tuan", "evondev"]
// *** join -> nối các phần tử trong mảng thành String
console.log(students.join()); //trung,thanh,name,tuan,evondev
console.log(students.join(" ")); //trung thanh name tuan evondev
// **** includes -> check phần tử có nằm trong mảng ko
console.log(students.includes("evondev")); //true
console.log(students.includes("evon")); //false
// ***** indexOf -> tìm ra vị trí đầu tiên của giá trị đó trong mảng
console.log(students.indexOf("evondev")); //0
console.log(students.indexOf("evon")); //-1
console.log(students.lastIndexOf("evondev"));
// ****** push() -> thêm phần tử vào cuối mảng
students.push("js");
console.log(students); //(6) ["evondev", "tuan", "name", "thanh", "trung", "js"]
// ****** unshift -> thêm phần tử vào đầu
students.upshift("FE");
console.log(students); //(7) ["FE", "evondev", "tuan", "name", "thanh", "trung", "js"]
// ******* pop() -> xóa phần tử cuối cùng trong mảng
students.pop();
console.log(students); //(6) ["FE", "evondev", "tuan", "name", "thanh", "trung"]
// ******* shift -> xóa phần tử đầu tiên
students.shift();
console.log(students); //(5) ["evondev", "tuan", "name", "thanh", "trung"]
```

# Bài 58: Tìm hiểu phương thức slice

```js
// slice() -> tạo ra copy của mảng ban đầu
const animals = ["tiger", "lion", "horse", "elephant"];
// * slice() -> tạo mảng copy y hệt
const animal2 = animals.slice();
console.log(animal2); //(4) ["tiger", "lion", "horse", "elephant"]
// ** slice(start): vị trí index trong mảng
const animal3 = animals.slice(1);
console.log(animal3); //(3) ["lion", "horse", "elephant"]
// slice(-1) -> ["elephant"]
// slice(-2) -> (2) ["horse", "elephant"]
// *** slice(start, end); start,end: vị trí bắt đầu, kết thúc -> sao chép từ start tới end-1
const animal4 = animals.slice(1, 3);
console.log(animal4); //(2) ["lion", "horse"]
```

# Bài 59: Tìm hiểu phương thức splice

```js
// splice() -> xóa phần tử trong mảng ban đầu, hoặc thay thế phần tử
const pets = ["dog", "cat", "bird", "dragon"];
// * splice(start) ->
pets.splice(2);
console.log(pets); // (2) ["dog", "cat"]
```

```js
// ** splice(start,deleteCount); deleteCount: số phần tử muốn xóa
const pets = ["dog", "cat", "bird", "dragon"];
pets.splice(1, 2);
console.log(pets);
// .splice(1,2) -> (2) ["dog", "dragon"]
// .splice(1,1) -> (3) ["dog", "bird", "dragon"]
// .splice(0,1) -> (3) ["cat", "bird", "dragon"]
// .splice(0,2) -> (2) ["bird", "dragon"]
```

```js
// *** splice(start, deleteCount, item1,item2,...), -> xóa và thay thế phần tử vào array ban đầu
const pets = ["dog", "cat", "bird", "dragon"];
pets.splice(0, 2, "dinasour", "mouse");
console.log(pets); //(4) ["dinasour", "mouse", "bird", "dragon"]
```

# Bài 60: Tìm hiểu phương thức sort

```js
// sort: sắp xếp các phần tử trong mảng theo chuẩn unicode-16
const random = [10, 2, 200, 100, 1999, 1, 1000];
console.log(random.sort()); //(6) [1, 10, 100, 1000, 1999, 2, 200]
// sort
// function(callback)
const random2 = random.sort(function (a, b) {
  if (a > b) return 1; //-> 1, đổi vị trí
  if (a < b) return -1;
});
console.log(random2); //(7) [1, 2, 10, 100, 200, 1000, 1999]

const random3 = random.sort((a, b) => {
  a > b ? 1 : -1;
});
console.log(random3); //(7) [1, 2, 10, 100, 200, 1000, 1999]
```

# Bài 61: Tìm hiểu phương thức find

```js
// -> trả về phần tử đc tìm thấy đầu tiên trong mảng với điều kiện nào đó
const numbers = [10, 2, 200, 100, 1999, 1, 1000];
console.log(numbers);
const findNumber = numbers.find((element) => element > 10);
console.log(findNumber); //200
const findNumber1 = numbers.find((element) => element > 10000);
console.log(findNumber1); //undefined
```

# Bài 62: Tìm hiểu phương thức findIndex

```js
// trả về vị trí đầu tiền củ phần tử đc tìm thấy thỏa mãn điều kiện nào đó
console.log(numbers);
const findIndexNumber = numbers.findIndex((element) => element > 10);
console.log(findIndexNumber); //2
const findIndexNumber1 = numbers.findIndex((element) => element > 10000);
console.log(findIndexNumber1); //-1
```

# Bài 63: Tìm hiểu phương thức sort bổ sung

```js
console.log("------array.sort2------");
const random = [10, 2, 200, 100, 1999, 1, 1000];

const random3 = random.sort((a, b) => (a > b ? 1 : -1));
console.log(random3); //(7) [1, 2, 10, 100, 200, 1000, 1999]

const random4 = random.sort((a, b) => (a > b ? -1 : 1));
// a>b return 1 -> sắp xếp tăng dần
// a<b return -1 -> giảm dần
console.log(random4); //(7) [1999, 1000, 200, 100, 10, 2, 1]
```

# Bài 64: Tìm hiểu phương thức map

```js
// duyệt qua từng phần tử trong mảng -> trả ra 1 mảng mới.
//.map(callback(value,index,array))
const list = [1, 2, 3, 4, 5, 6];
// yêu cầu: trả ra 1 mảng mới với giá trị x2
const listDouble = list.map((value, index, array) => {
  // (value < 5 ? (value > 3 ? value*3:value) : value*2)
  if (value < 5) {
    if (value > 3) {
      return value * 3;
    }
    return value;
  }
  return value * 2;
});
console.log(list);
console.log(listDouble); //[1, 2, 3, 12, 10, 12]
```

# Bài 65: Tìm hiểu phương thức forEach

```js
// duyệt qua từng phần tử trong mảng nhưng ko trả ra mảng mới,ko thể dừng forEach nên ko có return
// hay dùng khi làm việc với DOM, xử lý 1 cái gì đó ở trong mảng thôi mà ko cần return ra mảng mới
//.forEach(callback(value,index,array))
const listTriple = list.forEach((value) => value * 3);
console.log(listTriple); //undefined
// ?: khác nhau giữa map và forEach
// return đc // ko return đc
// trả ra 1 mảng mới dựa vào mảng ban đầu // ko trả ra mảng mới
// có thể dừng vì có thể return //forEach ko có return nên ko có dừng
```

# Bài 66: Tìm hiểu phương thức filter

```js
// sàng lọc các phần tử trong mảng thỏa mãn điều kiện nào đó
//.filter(callback(value,index,array))
const filterNumber = list.filter((element) => element > 3);
console.log(list);
console.log(filterNumber); //(3) [4, 5, 6]
```

# Bài 67: Tìm hiểu phương thức some và every

```js
//?: khác nhau some và every
// đều trả về Boolean
console.log("------array.some------");
// some: trả về True khi thỏa 1 điều kiện, ngc lại trả về False khi ko thỏa điều kiện nào cả
const someNumber = list.some((value) => value > 3);
console.log(someNumber); //true
console.log("------array.every------");
// every: trả về true khi tất cả điều kiện đúng, ngc lại chỉ cần 1 điều kiện sai là False
const everyNumber = list.every((value) => value > 3);
console.log(everyNumber); //false
```

# Bài 68: Tìm hiểu phương thức reduce

```js
// gom các phần tử trong mảng thành 1
// .reduce((a,b)=>{}, initialize value);
// cần làm bài tập để hiểu hơn
console.log(list);
const total = list.reduce((previousValue = 0, currentValue) => {
  console.log(previousValue, currentValue);
  return previousValue + currentValue;
});
console.log(total); //21
```

# Bài 69-70-71: Bài tập về mảng _[mySolution](.\exercises-array)_

# Bài 72: By value và by references

```js
console.log("------array.byValue------");
// -> giá trị thực sự đc lưu trong vùng bộ nhớ.
const num1 = 1;
const num2 = 1;
console.log(num1 === num2); //true
console.log("------array.byReference------");
// khi sử dụng mảng, obj
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); //false
// ám chỉ tới vùng bộ nhớ, chứ ko biết giá trị thực như thế nào
```

# Bài 73: Cách so sánh 2 mảng cơ bản

```js
// -> so sánh 2 mảng trả về True
// -> JSON :Javascript Object Notation: kiểu dữ liệu tuân theo 1 quy tắc nhất định
// .json -> lưu dữ liệu vào database
//
// JSON.stringify(value) -> convert giá trị dưới dạng JSON String
// {
//   "key":value,
//   "key":value,
//   "key":value,
// }
// Tại sao ko dùng toString
// [1,2,3].toString -> "1,2,3" -> kiểu dữ liệu sai
// JSON.stringify([1,2,3]) -> "[1,2,3]"
//
// JSON.parse
// JSON.parse("[1,2,3]") -> [1,2,3]
const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str === arr2Str); //true
```

# Bài 74: 2 cách để sao chép mảng cần biết

```js
// clone
const studentss = ["a", "b", "c", "d", "e"];
// -> clone ra 1 mảng mới, sửa lên cái mảng đó mà ko ảnh hưởng đến mảng gốc
// sau này muốn sử dụng mảng gốc thì ko sao cả
// * slice()
const students1 = studentss.slice();
// students1.pop();
// console.log(students1);
// ** spread operator [...array]
const spreadStudents = [...studentss];
spreadStudents.pop();
console.log(studentss);
console.log(spreadStudents);
```

# Bài 75: 2 cách để gộp mảng cần nắm

```js
// Gộp mảng
// [1,2] [3,4] [5,6]
// * concat
// array1.concat(array2, array3, arrayN);
const arr11 = [1, 2];
const arr22 = [3, 4];
const arr33 = [4, 5];
const mergeArr = arr11.concat(arr22, arr33);
console.log(mergeArr); //(6) [1, 2, 3, 4, 4, 5]

// ** spread operator
const mergeArr1 = [...arr11, ...arr22, ...arr33];
console.log(mergeArr1); //(6) [1, 2, 3, 4, 4, 5]
```

# Bài 76: Destructuring là gì ?

```js
// Destructuring array
  const toys = ["ball", "sword", "arrow", "magic"];
  const a = toys[0];
  const b = toys[1];
  const c = toys[2];
  console.log(a, b, c); //ball sword arrow
// PROBLEM: muốn lấy 3 giá trị thì cần tạo 3 cái biến -> code rất dài
// -> destructuring
// const [indexName, indexName, indexName ,....] = toys;
const [x, y, z, ...rest] = toys;
console.log(x, y, z); //ball sword arrow
```

# Bài 77: Tìm hiểu rest parameter

```js
// -> lấy những giá trị còn lại? -> rest parameter ~spread operator
console.log(rest); //["magic"]
//
function demo(a, ...rest) {
  console.log(a, rest);
}
demo(1, 2, 3, 4, 5, 6);
// 1
// (5) [2, 3, 4, 5, 6]
// students = ["an", "minh", "thai", "tung", "trung"];
```

# Bài 78-79-80-81: Vòng lặp for cơ bản

```js
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
```

# Bài 82: Bài tập cơ bản về vòng lặp for

```js
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
```

# Bài 83: Vòng lặp while và do while

```js
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
```

# Bài 84: Vòng lặp for of

```js
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
```

# Bài 85-86-87-88-89-90: Bài tập chương 6 _[mySolution](.\exercises-loop)_

## _Chương 7: Object cơ bản cho người mới_
