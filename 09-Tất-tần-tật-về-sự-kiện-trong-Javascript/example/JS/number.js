// Số nguyên: 1 2 3 4 555
// Số thập phân: 5,8 3,4 -> 5.8 3.4

console.log(5 + 7);
console.log(typeof 10);

const number1 = "5";
const number2 = "3.4";
console.log("5 " + parseInt(number1)); //5
console.log("3.4 " + parseFloat(number2)); //3.4

const number3 = -10;
console.log(Math.abs(number3));//10

//Math.floor(value); -> làm tròn xuống, 4.3 -> 4 
console.log(Math.floor(4.3));
//Math.ceil(value); -> làm tròn lên, 4.3 -> 5 
console.log(Math.ceil(4.3)); 
//Math.round(value); -> làm tròn đến số nguyên gần nhất, 4.3 -> 4, 4.5 -> 5
console.log(Math.round(4.3));

//toFixed(number) ,0.333333(number) -> 0.33(string)
console.log((1/3).toFixed(2)); // 0.33333 -> "0.33"
console.log(parseFloat((1/3).toFixed(2))); // 0.33333 -> 0.33

//random từ 0 -> 1
console.log(Math.random());
//random từ 1 -> 10
console.log(Math.ceil(Math.random() * 10));

console.log(Math.max(1, 2, 3, 4, 5, 22, -2)); //->max:22
console.log(Math.min(1, 2, 3, -2, 3, 5)); //min: -2
console.log(Math.pow(3, 2)); //3^2

//isNAN vs Number.isNAN: khá là rối khi phân biệt.
//NAN: Not a Number
console.log(isNaN()); //true
console.log(isNaN("234")); //false ~ isNAN(234)->False
console.log(isNaN("String")); //true

console.log(Number.isNaN("String")); //false
console.log(Number.isNaN("234")); //false
console.log(Number.isNaN(NaN)); //true


