// 1. Đảo ngược chiều chuỗi
function reverseString(str) {
  if(!str) return null;
  // split(" ")
  // const arrStr = str.split(" ");
  
  // // const arrStrReverse = arrStr.reverse();
  // // console.log(arrStrReverse); //->(4) ["Tung", "is", "name", "My"]
  
  // const arrStrReverse = arrStr.reverse().join(" ");
  // // console.log(arrStrReverse); //->Tung is name My
  // return arrStrReverse;

  // chaining method
  return str.split(" ").reverse().join(" ");
}
console.log(reverseString("My name is Tung"));

// 2. Đảo ngược 1 chuỗi bao gồm các kí tự. "i love" -> "evol i"
function reverseWord(str){
  if(!str) return null;
  // const arrStr = str
  //               .split(" ")
  //               .map((item)=>item.split("").reverse().join(""))
  // const result = arrStr.reverse().join(" ")
  // console.log(result);
  return str.split(" ").map((item)=>item.split("").reverse().join("")).reverse().join(" ");
}
console.log(reverseWord("i love"));
// 3. in hoa chữ cái đầu trong chuỗi VD: my name is tung -> My Name Is Tung
function capitalizeWord(word = "") {
  if(word.length === 0 ) return null;
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  let otherWord = word.toLowerCase().slice(1);
  return `${newWord}${otherWord}`;
}
function capitalizeString(str) {
  if(!str) return null;
  // const result = str
  //               .split(" ")
  //               .map((item) => capitalizeWord(item))
  //               .join(" ");
  return str.split(" ").map((item) => capitalizeWord(item)).join(" ");
}
console.log(capitalizeString("my name is tung"));