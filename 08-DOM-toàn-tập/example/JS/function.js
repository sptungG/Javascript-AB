// Function thực hiện chức năng và có thể sử dụng đi sử dụng lại ở nhiều nơi mà ko cần viết lại.
// function functionName(parameters) {
//  code 
// }

// parameter: tham số
function sum(a,b){
  // console.log(`SUM: ${5+5}`);
  return a + b;
  // return value
  // ko có return thì kết quả hàm trả về sẽ là undefined
}
console.log(`SUM = ${sum(10,5)}`); //invoke function, gọi hàm

// function sum(parameters = default value)
function summ(a=0, b=0) {
  return a + b;
}
console.log(`SUM = ${sum(10)}`); //NaN
console.log(`SUM = ${summ(10)}`); //10
// sum(argument): đối số
// ----------------------------------------------- -----------------------------------------------
// ***** Lưu function vào 1 biến để gọi sau này
function add(a=0, b=0) {
  return a + b;
}
const sum2 = add; //gán function cho biến sum2
console.log(`SUM = ${sum2(300, 400)}`); //700
// ***** Tham số là function
// Tính trung bình của a, b (a+b)/2
// fn: function

function average(a , b , fn) {
  const total = fn(a,b);
  return total/2;
}
let result = average(200, 300, sum2);
console.log(`AVG = ${result}`); //250
// ----------------------------------------------- -----------------------------------------------
// * Function declaration, hàm có tên 
// ** Anonymous function (function expression), hàm ko có tên
const logName = function () {
  console.log("Your name");
};//ko bị hoisted, ko bị tự động đưa lên trên đầu như Function declaration -> p gọi trc khi dùng
console.log(logName);
// *** IIFE -> immediately invoked function execution, hàm đc gọi ra ngay lập tức
(function (){
  console.log("My name");
})();
// ----------------------------------------------- -----------------------------------------------
// *Global vs Function Scope: phạm vi sử dụng của biến
// Global scope: biến nằm ngoài function
let myName = "Tung"; //Global Scope
function loggName() {
  let myName = "is Tung"; //Function Scope: chỉ hđ trong function
  console.log(myName);
 }
 console.log(myName);
 loggName();
// ----------------------------------------------- -----------------------------------------------
// Global ,Local , Block Scope, var
// let message;
if(2>1){
  // let message = "Hello Tung";
  var message2 = "Hello Tungggg"
  message = "Hello Tungg"
}
// alert(message); //ERROR: message is not defined, vì message đang ở Block
// alert(message2); //vẫn chạy, vì var là global scope, và bị hoisted-> đc đưa lên trên cùng
// alert(message); //vẫn chạy, vì let đc khai báo ở ngoài -> Global scope, và đc gán lại giá trị
// ----------------------------------------------- CLOSURE -----------------------------------------------
// // Lexical scope: định nghĩa cái scope của biến đó bỏi cái vị trí của nó trong code ->????
// let newName = "Viet Tung"; //global Scope
// function sayHello() {
//   let message5 = "Hi";
//   console.log(`${message5} ${newName}`);  //Hi Viet Tung
// }
// sayHello(); 
// // CLOSURE: nhiều function lồng vào nhau, -> truy suất từ function bên trong ra function bên ngoài
// // closure đc tạo ra mỗi khi function đc tạo
// function sayHello2() { //outer
//   let message = "HI"
//   function sayHi(){
//     //inner
//     console.log(message); //inner function truy cập message trong scope của outer function
//   };
//   return sayHi;
// }
// let hello =  sayHello2(); // -> return function, chưa đc chạy
// hello(); //chạy function -> "HI"
// 
// function sayHello3(message){
//   return function hiYourName(name) {
//     console.log(`${message} ${name}`);
//   };
// };
// let hello = sayHello3("Yooooooo"); //truyền vào message, chưa chạy, mới trả về function hiYourName 
// hello("Closure"); //Yooooooo Closure
// // Sử dụng nhiềuuuuuuuu
// 
function anotherFunction(){
  let otherMessage = "Hello";
  function sayHi(){
    console.log(otherMessage);
  }
  return sayHi;
}
let callFunc =  anotherFunction(); // otherMessage is no longer accessible
callFunc(); //-> Hello
// ----------------------------------------------- -----------------------------------------------
// Arrow function: anonymous function
// những cải tiến của Js ECMAScript -> Arrow function,....
// ko bị hoisted
// *** Normal function
const square = function(x){
  return x*x;
}
square(5); //25
// ***** Arrow function

// * rút gọn khi return
const square2 = (x) => x*x;

// * Khi xử lí nhiều dòng
// const squaree = () =>{
// handle code 
// return;
// }