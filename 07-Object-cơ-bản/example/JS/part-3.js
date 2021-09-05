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
// falsy value: null false ""
// String(value) -> "value"
console.log("--------- String(value) ---------");
console.log(String(4.5));       //"4.5"
console.log(String(undefined)); //"undefined"
console.log(String(NaN));       //"NaN"
console.log(String(null));      //"null"
console.log(String(false));     //"false"
console.log(String(true));      //"true"
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

console.log("--------- Toán tử so sánh: > < >= <= ---------");
// > < >= <=
console.log(5 > 7);   //false
console.log(5 < 7);   //true
console.log(5 >= 5);  //true
console.log(6 <= 6);  //true

console.log("--------- Toán tử Logic:&& || ! ---------");
// && || !
console.log(5>7 && 8>3);//false, 0 && 1 -> 0
console.log(5>7 || 8>3);//true, 0 || 1 -> 1
const wrong = false;
console.log(!wrong);    //true

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
console.log(10 === "10"); //false, *recommended*
console.log(10 !== "10"); //true, *recommended*
//


































