## _Chương 7: Object cơ bản cho người mới_

# Bài 91-92: Tìm hiểu object cơ bản

```js
// Obj là tập hợp các key và value
// cách khai báo:
// * Object Literal
const objectLiteral = {};
// ** Object constructor
const objectConstructor = new Object();
const student = {
  // property(key): value,
  name: "Tung",
  age: 27,
  male: true,
  "last-name": "Viet",
  hi: function () {
    //method
    console.log("Hello Tung");
  },
};
```

```js
// 2 cách truy xuất giá trị của Object
// * dot notation, .
console.log(student.name);
// ** bracket notation ["key"] -> dùng trong những trường hợp key dạng đặc biệt
// student.last-name; -> ERROR
console.log(student["last-name"]);
//-- Thay đổi giá trị của Object
student.age = 20;
console.log(student); // -> age: 20,
//-- Thêm key
student.isDeveloper = true;
student["is-developer"] = false; //is-developer: false,
console.log(student); // -> isDeveloper: true,
//-- Thêm method
student.hello = function () {
  console.log("HI");
};
//-- Xóa giá trị trong Object
delete student["last-name"];
console.log(student); //
```

# Bài 93: Tìm hiểu for in trong object

```js
// for in trong Object
for (const key in student) {
  // console.log(key); //->key
  const value = student[key];
  console.log(`${key}: ${value}`); //value
}
```

# Bài 94: Tìm hiểu phương thức Object.keys

```js
// * Object.keys(object) -> mảng chứa tất cả các key
const keys = Object.keys(student);
console.log(keys); //(7) ["name", "age", "male", "hi", "isDeveloper", "is-developer", "hello"]
console.log(keys.length); //7
// -> filter, ....
```

# Bài 95: Tìm hiểu phương thức Object.values

```js
// ** Object.values(object)
// -> mảng chứa tất cả các value
const values = Object.values(student);
console.log(values); //(7) ["Tung", 20, true, ƒ, true, false, ƒ]
```

# Bài 96: Tìm hiểu phương thức Object.entries

```js
// *** Object.entries(object)
// -> mảng nested gồm key và value
const entries = Object.entries(student);
console.log(entries);
// (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// (7) [["name", "Tung"], ["age", 20], ["male", true], ["hi", ƒ], ["isDeveloper", true], ["is-developer", false], ["hello", ƒ]];
```

# Bài 97: Tìm hiểu phương thức Object.assign

```js
// **** Object.assign()
// Copy value, gộp Object
const a = {
  firstName: "Tung",
};
const b = {
  lastName: "Tung",
};
const c = Object.assign(a, b);
console.log(c); //{firstName: "Tung", lastName: "Tung"}
// hoặc có thể dùng Spread Operator ...
const c1 = { ...a, ...b };
console.log(c1); //{firstName: "Tung", lastName: "Tung"}
```

# Bài 98: Tìm hiểu phương thức Object.freeze

```js
// ***** Object.freeze(object)
// -> ngăn chặn ko cho chỉnh sửa key và value
const car = {
  brand: "BWN",
  color: "blue",
};
const newCar = Object.freeze(car);
newCar.brand = "Audi";
console.log(newCar); //{brand: "BWN", color: "blue"}
```

# Bài 99: Tìm hiểu phương thức Object.seal

```js
// ****** Object.seal(object)
// -> cho phép chỉnh sửa nhưng ko đc thêm key: value mới
const user = {
  name: "Tung",
};
const newUser = Object.seal(user);
newUser.age = 11;
console.log(newUser); //{name: "Tung"}
```

# Bài 100: Cách sao chép một object

```js
const user = {
  name: "Tung",
  // nested Object
  school: {
    name: "HUST",
    room: {
      name: "IT",
    },
  },
};
// const newUser = user;
// -> ERROR: by Reference -> nên khi thay đổi ở newUser thì user cũng thay đổi theo
// => clone Object
// * Spread Operator
// ko copy đc nested Object
const newUser1 = { ...user };
newUser1.name = "TTT";
console.log(user); //{name: "Tung"}
console.log(newUser1); //{name: "TTT"}
// ** Object.assign()
// ko copy đc nested Object
const newUser2 = Object.assign({}, user);
// newUser2.school.name = "Dev"; //ERROR: thay đổi ảnh hưởng trên cả object gốc
console.log(newUser2);
```

# Bài 101: Cách sao chép một object phức tạp

```js
//*** với nested Object
const newUser3 = JSON.parse(JSON.stringify(user));
newUser3.school.name = "Dev"; //-> thay đổi ko ảnh hưởng obj gốc
console.log(newUser3);
```

# Bài 102: Từ khoá this trong object

```js
// THIS keyword
// đề cập tới object gần nhất
const student2 = {
  // property(key): value,
  name: "Tung",
  age: 27,
  male: true,
  "last-name": "Viet",
  hi: function () {
    //method
    // console.log("Hello Tung");
    // console.log(this);
    console.log(`HELLO ${this.name}!. I am ${this.age} years old.`);
  },
  fullname: {
    name: "Tunggg",
  },
};
// student2.hi(); //{name: "Tung", age: 27, male: true, last-name: "Viet", hi: ƒ}
student2.hi(); //HELLO Tung!. I am 27 years old.
```

# Bài 103: Optional chaining

```js
// Optional chaining object?
console.log(student2.name);
// console.log(student2.fullname); //undefined
// console.log(student2.fullname.name); //Cannot read property 'name' of undefined
// Check key
if (student2.fullname) {
  if (student2.fullname.name) {
    console.log(student2.fullname.name);
  }
}
// -> PROBLEM: dài
// --> Object chaining
// student2.fullname?.name
console.log(student2.fullname?.name);
```

# Bài 104: Destructuring object

```js
// Destructuring Object
// const name = student2.name;
// const age = student2.age;
// PROBLEM: dài
// -> Destructuring Obj
const { name, age, male, ...rest } = student2;
console.log(name, age, male); //Tung 27 true
console.log(rest); //{last-name: "Viet", fullname: {…}, hi: ƒ}

// --> áp dụng khi viết function
// * Normal function
// PROBLEM: phải nhớ và truyền đúng thứ tự
// function whatIsYourInfo(name, age, school) {
//   console.log(name, age, school);
// }
// whatIsYourInfo("Tung", 22, "HUST");
// whatIsYourInfo(23, "HUST", "Tung");
// ** sử dụng function Object parameter
function whatIsYourInfo(obj) {
  console.log(obj.name, obj.age, obj.school);
}
const studentt = {
  name: "Tung",
  age: 22,
  school: "HUST",
};
whatIsYourInfo(studentt); //Tung 22 HUST
// *** sử dụng Destructuring parameter
function whatIsYourInfo({ name, age, school }) {
  console.log(name, age, school);
}
whatIsYourInfo({ age: 22, name: "Tung", school: "HUST" }); //Tung 22 HUST
```

# Bài 105-106-107-108: Bài tập chương 7 *[mySolution](.\exercises-object)*

## _Chương 8: DOM toàn tập_
