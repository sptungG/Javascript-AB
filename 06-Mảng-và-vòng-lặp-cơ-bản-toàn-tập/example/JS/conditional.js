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
// --------------------------------------------------
// // prompt
// // confirm
// // alert

// alert("Your website has been hacked");

// const yourName = prompt("Enter your name: ","TTT");
// console.log(yourName);

// const isYourMoney = confirm("Is it your money?");
// console.log(isYourMoney); 
// --------------------------------------------------
// const yourAge = prompt("Enter your age: ","");
// const message = "Your age is not enough to watch the movie";
// console.log(typeof yourAge);
// if(Number(yourAge) >= 18){
//   alert("Enjoy!.You are allowed to watch the movie.");
// }
// alert(message);

// const a = 5;
// const b = 10;
// if(a > b){
//   alert(`${a} is greater than ${b}`);
// }
// alert(`${a} is not greater than ${b}`);
// --------------------------------------------------
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
// --------------------------------------------------
// Ternary Operator: 1 câu điều kiện khác trong Js, if else rút gọn

const yourAge = 12;
let message = "";
if(yourAge >= 18){
  message = "You are adult";
}else{
  message = "You are a child"
}
console.log(message);
// Condition ? true : false;
let message1 = (yourAge>=18) ? "You are adult" : "You are a child";
console.log(message1);

let message2 = 
  yourAge >= 18 
    ?"You are adult"
    : yourAge <= 10
    ? "You are a child"
    : "You are a young boy";
console.log(message2);