
# Bài 17: Tìm hiểu hàm Number
```js
// Number(value)
// "4" "4.5"
console.log("--------- Number(value) ---------");
console.log(Number("4"));       //4
console.log(Number("4.5"));     //4.5
console.log(Number("String"));  //NaN: Not a Number
console.log(Number(undefined)); //NaN
console.log(Number(NaN));       //NaN
console.log(Number(null));      //0
console.log(Number(false));     //0
console.log(Number(""));        //0
console.log(Number(true));      //1
```

# Bài 18: Tìm hiểu hàm String
```js
// falsy value: null false ""
// String(value) -> "value"
console.log("--------- String(value) ---------");
console.log(String(4.5));       //"4.5"
console.log(String(undefined)); //"undefined"
console.log(String(NaN));       //"NaN"
console.log(String(null));      //"null"
console.log(String(false));     //"false"
console.log(String(true));      //"true"
```

# Bài 19: Tìm hiểu hàm Boolean
```js
// Boolean(value) -> True/False
console.log("--------- Boolean(value) ---------");
console.log(Boolean(false));      //"false"
console.log(Boolean(undefined));  //"false"
console.log(Boolean(NaN));        //"false"
console.log(Boolean(null));       //"false"
console.log(Boolean(""));         //"false"
console.log(Boolean(0));          //"false"
console.log(Boolean(true));       //"true"
console.log(Boolean(1));          //"true"
```

# Bài 20: Type coercion là gì ?
```js
// Type coercion: chuyển đổi dữ liệu từ kiểu này sang kiểu khác.
console.log("--------- Type coercion ---------");
// + - * /
console.log(1 + 2);             //3
console.log(10 + 10);           //20
console.log(10 + "10");         //"1010", js converts 10 to "10" when using +
console.log("10" + 10);         //"1010"
console.log("10" - 10);         //0, "10"-->10
console.log(null + "11");       //"null11"
console.log(null + undefined);  //NaN
console.log("" - 1);            //-1, ""-->0
console.log(null + 10);         //10
console.log(false - true);      //-1, false=0, true=1
console.log(false + true);      //1, false=0, true=1
```

# Bài 21: Toán tử so sánh cơ bản
```js
console.log("--------- Toán tử so sánh: > < >= <= ---------");
// > < >= <=
console.log(5 > 7);   //false
console.log(5 < 7);   //true
console.log(5 >= 5);  //true
console.log(6 <= 6);  //true
```

# Bài 22: Toán tử logic cơ bản
```js
console.log("--------- Toán tử Logic:&& || ! ---------");
// && || !
console.log(5>7 && 8>3);//false, 0 && 1 -> 0
console.log(5>7 || 8>3);//true, 0 || 1 -> 1
const wrong = false;
console.log(!wrong);    //true
```

# Bài 23: So sánh == vs ===
```js
// == vs ===
console.log("== vs ===" )
console.log(10 == 10);    //true
console.log(10 == "10");  //true
// ==: so sánh 2 giá trị
console.log(true == 1);   //true
console.log(1 == "01");   //true, Number("01") = 1
console.log(null == "");  //false, "null" != "" -> false
console.log(typeof 10);
console.log(typeof '10');
// === so sánh cả giá trị và kiểu dữ liệu.
console.log(10 === "10"); //false, *recommended*
console.log(10 !== "10"); //true, *recommended*
```

# Bài 24: Câu điều kiện cơ bản
```js
// if(condition){
// code
// }
const isRich = false;
const myMoney = 1000000;
if(isRich){ // if isRich = true -> run if
  console.log("Buy a new car");
}else if( myMoney > 1000 ){
  console.log("I will give you some money");
}else{
  console.log("Save Money");
}
```

# Bài 25: alert, prompt và confirm
```js
// prompt
// confirm
// alert

alert("Your website has been hacked");

const yourName = prompt("Enter your name: ","TTT");
console.log(yourName);

const isYourMoney = confirm("Is it your money?");
console.log(isYourMoney); 
```
# Bài 26: Bài tập về câu điều kiện
```js
const yourAge = prompt("Enter your age: ","");
const message = "Your age is not enough to watch the movie";
console.log(typeof yourAge);
if(Number(yourAge) >= 18){
  alert("Enjoy!.You are allowed to watch the movie.");
}
alert(message);

const a = 5;
const b = 10;
if(a > b){
  alert(`${a} is greater than ${b}`);
}
alert(`${a} is not greater than ${b}`);
```
# Bài 27: Tìm hiểu switch case
```js
const fruit = "lemon";
switch (fruit) {
  case "apple":
    console.log("You like to eat Apple");
    break;

  case "lemon":
  case "watermelon":
    console.log("You like to eat Lemon and Watermelon");
    break;
  
  default:
    console.log("You like to eat Orange");
    break;
}
```

# Bài 28: Ternary operator
```js
// Ternary Operator: 1 câu điều kiện khác trong Js, if else rút gọn

const yourAge = 12;
let message = "";
if(yourAge >= 18){
  message = "You are adult";
}else{
  message = "You are a child"
}
console.log(message);   //You are a child

// Condition ? true : false;
let message1 = (yourAge>=18) ? "You are adult" : "You are a child";
console.log(message1);  //You are a child
// 
let message2 = 
  yourAge >= 18 
    ?"You are adult"
    : yourAge <= 10
    ? "You are a child"
    : "You are a young boy";
console.log(message2);  //You are a young boy
```