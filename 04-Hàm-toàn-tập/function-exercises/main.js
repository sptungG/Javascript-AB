// 1. Viêt function so sánh 2 số a, b tìm ra số lớn hơn
function compareNumbers(a = 0, b = 0){
  // if(a == b){
  //   return `${a} equals to ${b}`
  // }else{
  //   if(a > b) return `${a} is greater than ${b}`;
  //   else return `${b} is greater than ${a}`
  // } // -> 🤏🤏
  if(typeof a !== "number" || typeof b !== "number") {
    console.log("Please enter a valid number");
    return;
  };
  return Math.max(a,b);
}
console.log(compareNumbers(100,111)); //111
console.log(compareNumbers(10)); //10
console.log(compareNumbers("aaaa")); //undefined
console.log(compareNumbers(100,"1000")); //undefined

//2. In hoa chữ cái đầu. tuan -> Tuan, NAM -> Nam
// Capitalize
function capitalize( word = "" ){
  if(word.length = 0) return null;
  // let newWord = word.toLowerCase().charAt(0).toUpperCase() +word.toLowerCase().slice(1);
  // return newWord; 
  // hello -> slice(0,3) -> hel
  // hello -> slice(1) -> ello
  return word.toLowerCase().charAt(0).toUpperCase() + word.toLowerCase().slice(1);
}
console.log(capitalize()); //null
console.log(capitalize("abc")); //Abc

//3. Viết hàm có sử dụng callback( function là parameter của function khác) in ra kết quả của bài compare ở trên
// Khi đi làm sẽ sử dụng nhiềuuuuuuuuuuuu, 
// những callback để dùng vào chức năng nào đó,
// function này chạy xong, rồi làm gì đó sau đó
function useCallback(a, b, callback){ 
  let max = compareNumbers(a, b)
  callback(max); //callback là 1 function, là parameter
}
// console.log(useCallback(500,1000, ---)); //-> printMax(number)
function printMax(number){
  console.log("Max number is " + number);
}
console.log(useCallback(500,1000,printMax));