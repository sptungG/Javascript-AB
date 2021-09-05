// DOM
// Document Object Model
// DOM attribute: href type ...
// DOM node: html, header, div, .... tags
// 2. Selecting Nodes
// * 2.1. document.querySelector("selector")
// .class tags #id
// -> trả về 1 node nếu tồn tại, ngc lại thì trả về null
const singleNode = document.querySelector("h1");
console.log(singleNode);
const singleNode2 = document.querySelector(".container");
console.log(singleNode2);
const singleNode3 = document.querySelector("#spinner");
console.log(singleNode3);
const singleNode4 = document.querySelector(".container .header");
console.log(singleNode4);

// **  2.2. document.querySelectorAll("selector");
// -> trả về 1 NodeList chứa danh sách các node, nếu ko có thì trả về empty NodeList
// mảng nhưng ko phải mảng: nó có thể loop và forEach
//                          nhưng ko thể sử dụng những phương thức trong mảng như push, pop, shift, map, filter ,...

// const multiNodes = document.querySelector(".item"); //-> chỉ lấy .item đầu tiên
const multiNodes = document.querySelectorAll(".item"); //NodeList(5) [li.item, li.item, li.item, li.item, li.item]
console.log(multiNodes);

// *** 2.3. document.getElementsByClassName(.class);
// -> trả về 1 HTMLCollection ~NodeList chứa danh sách các node, nếu ko có thì trả về empty []
const classNodes = document.getElementsByClassName("item");
console.log(classNodes); //HTMLCollection(5) [li.item, li.item, li.item, li.item, li.item]

// **** 2.4. document.getElementsByTagName("tagName");
// -> trả về 1 HTMLCollection ~NodeList chứa danh sách các node, nếu ko có thì trả về empty []
const tagNodes = document.getElementsByTagName("h1");
console.log(tagNodes); //HTMLCollection [h1]

// ***** 2.5. document.getElementById("id");
// -> trả về 1 Node
const idNode = document.getElementById("spinner");
console.log(idNode);
// => querySelector(tag, class, id) querySelectorAll(tag, class, id) hay đc dùng hơn


