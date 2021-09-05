{
const name = "Tung";
const job =  "FE developer"
console.log(name);
console.log(typeof name);
const newStr = " My name is Tung and I am a FE developer";
const newStr2 = " My name is " + name + " and I am a " + job;   //---> rắc rối khi gặp nhiều biến, => backtick ``
// ${variable}
const newStr3 = `My name is ${name} and I am a ${job}
I love coding
`; //dùng khi đi kèm với biến.
console.log(newStr3);

console.log(newStr3.length); //39, index 0-38
}
{
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
console.log(myStr.lastIndexOf("e")); //16

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
const myStr1 = "    Frontend Developer D     ";
console.log(myStr1.trim()); //Frontend Developer D
console.log(myStr1.trimStart()); //Frontend Developer D     
console.log(myStr1.trimEnd()); //    Frontend Developer D

//charAt(num): in ra chữ ở vị trí num
console.log(myStr.charAt(2)); //o

//Bài 12: Phân biệt substr và substring (hay bị nhầm lẫm).
const myStr2 = "Frontend"
//substr: lấy ra 1 phần của chuỗi(String)
//substr(index, length); vị trí, số lượng kí tự muốn lấy.
console.log(myStr2.substr(1,5)); //ronte, vị trí 1 và lấy 5 kí tự
//substring: lấy ra các kí tự của chuỗi(String)
//substring(startIndex, endIndex);  
console.log(myStr2.substring(1,5)); //ront, lấy kí tự từ vị trí 1 đến 5-1 
}
{
const myStr3 = "    Frontend Developer D     ";
//Loại bỏ khoảng trống 2 bên, đưa tất cả về chữ thường, thay chữ 'Developer' thành 'Developer and Designer', repeat 2 lần
console.log(
    myStr3
        .trim()
        .replace("Developer","Developer and Designer")
        .toLowerCase()
        .repeat(2)
);
}
