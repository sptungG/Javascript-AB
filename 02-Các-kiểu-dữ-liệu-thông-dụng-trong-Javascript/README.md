Datatype: Number, String, Boolean, Undefined, Null

# Bài 7: Giới thiệu kiểu dữ liệu `String`(Chuỗi)
# Bài 8: Sử dụng string cơ bản

* Thường là những chữ, số nằm trong dấu `" "` (nháy đôi, double quote),`' '`(nháy đơn, single quote), hoặc dấu **``**(backtick, template literal).

```js
const name = "Tung";
const job =  "FE developer"
console.log(name);
console.log(typeof name);
const newStr = " My name is Tung and I am a FE developer";
const newStr2 = " My name is " + name + " and I am a " + job;   //---> rắc rối khi gặp nhiều biến, => backtick ``
// ${variable}
const newStr3 = `My name is ${name} and I am a ${job}
                I love coding.`; //dùng khi đi kèm với biến.
console.log(newStr3);
```

# Bài 9: `index` và `length` trong string cần nắm

* `index` là vị trí của tùng kí tự trong chuỗi, bao gồm cả khoảng trắng.
* `length` số các index

# Bài 10: Các phương thức trong string phần 1
# Bài 11: Các phương thức trong string phần 2

```js
// -------------------- 1 --------------------
//split: cắt String
const myStr = "Frontend Developer"
console.log(myStr.split(" ")); // (2) ["Frontend", "Developer"]
console.log(myStr.split("")); //  (18) ["F", "r", "o", "n", "t", "e", "n", "d", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r"]
console.log(myStr.split("/")); // ["Frontend Developer"], trong myStr ko có /

//toLowerCase: chữ thường
console.log(myStr.toLowerCase()); //frontend developer
//toUpperCase: chữ hoa
console.log(myStr.toUpperCase()); //FRONTEND DEVELOPER

//startsWith/endsWith: kiểm tra String bắt đầu/kết thúc với chữ đc nhập hay ko -> T/F
console.log(myStr.startsWith("Frontend")); //true
console.log(myStr.startsWith("frontend")); //false
console.log(myStr.endsWith("Developer")); //true
//includes: kiểm tra String có chứa chữ đc nhập hay ko
console.log(myStr.includes("abc")); //false
console.log(myStr.includes("end")); //true

//indexOf: in ra vị trí xuất hiện đầu tiên của chữ đc nhập vào trong String
console.log(myStr.indexOf("e")); //5
//lastIndexOf: in ra vị trí xuất hiện cuối của chữ đc nhập vào trong String
console.log(myStr.lastIndexOf("e"));
```
```js
// -------------------- 2 --------------------
//replace: thay thế
console.log(myStr.replace("Developer","Designer")); //Frontend Designer
console.log(myStr.replace("developer","Designer")); //Frontend Developer, giữ nguyên

//repeat(num): lăp lại String num lần
console.log(myStr.repeat(5)); //Frontend DeveloperFrontend DeveloperFrontend DeveloperFrontend DeveloperFrontend Developer

//slice(start, end) lấy từ vị trí [start] đến [end-1]
//--> Tạo String mới từ String gốc
// "Frontend Developer"
console.log(myStr.slice(0,7)); //Fronten
console.log(myStr.slice(0,8)); //Frontend
console.log(myStr.slice(0));  //Frontend Developer
//index -1 là vị trí cuối, -2, -3, ...
console.log(myStr.slice(-1)); //r
console.log(myStr.slice(-5)); //loper
console.log(myStr.slice(999)); //

//trim: loại bỏ khoảng trống ở đầu và cuối
//trimEnd
//trimStart
const myStr1 = "    Frontend Developer D     "
console.log(myStr1.trim()); //Frontend Developer D
console.log(myStr1.trimStart()); //Frontend Developer D     
console.log(myStr1.trimEnd()); //    Frontend Developer D

//charAt(num): in ra chữ ở vị trí num
console.log(myStr.charAt(2)); //o
```
# Bài 12: Phân biệt substr và substring

```js
    /**
     * Returns the substring at the specified location within a String object.
     * @param start The zero-based index number indicating the beginning of the substring.
     * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
     * If end is omitted, the characters from start through the end of the original string are returned.
     */
    substring(start: number, end?: number): string;
```
```js
    /**
     * Gets a substring beginning at the specified location and having the specified length.
     * @param from The starting position of the desired substring. The index of the first character in the string is zero.
     * @param length The number of characters to include in the returned substring.
     */
    substr(from: number, length?: number): string;
```

```js
const myStr2 = "Frontend"
//substr: lấy ra 1 phần của chuỗi(String)
//substr(index, length); vị trí, số lượng kí tự muốn lấy.
console.log(myStr2.substr(1,5)); //ronte, vị trí 1 và lấy 5 kí tự
//substring: lấy ra các kí tự của chuỗi(String)
//substring(startIndex, endIndex);  
console.log(myStr2.substring(1,5)); //ront, lấy kí tự từ vị trí 1 đến 5-1
```

# Bài 13: Sử dụng nhiều phương thức của string cùng lúc

```js
const myStr3 = "    Frontend Developer D     ";
//Loại bỏ khoảng trống 2 bên, đưa tất cả về chữ thường, thay chữ 'Developer' thành 'Developer and Designer', repeat 2 lần
console.log(
    myStr3
        .trim()
        .replace("Developer","Developer and Designer")
        .toLowerCase()
        .repeat(2)
);
```

# Bài 14: Tìm hiểu kiểu dữ liệu number phần 1
# Bài 15: Tìm hiểu kiểu dữ liệu number phần 2

```js
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
```

# Bài 16: Tìm hiểu kiểu dữ liệu khác
```js
// Undefined khai báo nhưng chưa gán giá trị
let a;
console.log(a); //undefined 
let b;
b = 100
console.log(b); //100

// const c; //ERROR
const c = "String"

//Null -> nothing
let d = null;
console.log(d);

//Boolean True||False
// falsy and truthy values
// falsy values: ""; 0; false, undefined, null. ---> FALSE
// truthy values: "abc", 1, true ,100 ,,... 
```