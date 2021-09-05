// kích thước và vị trí

// 1. offsetWidth: lấy độ rộng thực sự của box đó
//    offsetHeight
const boxed = document.querySelector(".boxed");
console.log(boxed.offsetWidth); //200
console.log(boxed.offsetHeight); //200
//    offsetLeft: vị trí của nó so với bên trái
//    offsetTop
console.log(boxed.offsetLeft); //10, do đang đặt margin:10px
console.log(boxed.offsetTop); //31, h3 ở trên, đẩy xuống 21px + margin:10px
//    offsetParent: lấy ra phần tử cha
console.log(boxed.offsetParent); //<body>...</body>

// 2. clientWidth, lấy độ rộng phần tử -border
// clientHeight
// clientLeft: vị trí của nó so với bên trái border
// clientTop
console.log(boxed.clientWidth); //190
console.log(boxed.clientHeight); //190
console.log(boxed.clientLeft); //5
console.log(boxed.clientTop); //5

// 3. window.innerWidth
// window.outerWidth
// window.innerHeight: lấy chiều cao trong khung hiển thị web
// window.outerHeight
console.log(window.innerHeight);
console.log(window.outerHeight);
console.log(window.innerWidth);
console.log(window.outerWidth);

// 4. selector.getBoundingClientRect()
// -> lấy ra vị trí-tọa độ, kích thước của phần tử
console.log(boxed.getBoundingClientRect());
// left, x: vị trí của khối so với bên trái
// top: vị trí so với phía trên
// bottom: chiều cao khối + top
// right: độ rộng của khối + left
// width:
// height
// => làm hiệu ứng con trỏ chuột dựa vào tọa độ

// NodeList vs HTMLCollection
// Giống: có thể truy cập bằng index, length, loop
//        là mảng nhưng ko p là mảng, ko sử dụng đc các phg thức push, pop, shift, map, filter,..
// HTMLCollection: ko sử dụng đc forEach
// NodeList: sử dụng đc forEach -> hay đc dùng hơn
const li = document.getElementsByClassName("item");
const li2 = document.querySelectorAll(".item");
console.log(li); //HTMLCollection
console.log(li2); //NodeList

// li.forEach((item) => {
//   console.log(item);//ERROR: li.forEach is not a function
// });
li2.forEach((item) => {
  console.log(item); //OK
});

for (let i = 0; i < li.length; i++) {
  console.log(li[i]); //OK
}
// parentNode vs parentElement
// Node: node ở DOM tree, gồm cả textNode
// Element: thẻ
// parentElement: có thể null
// parentNode: lấy chính nó, nếu ko có parent bao ngoài
// document.documentElement -> lấy thẻ HTML
console.log(document.documentElement.parentElement); //null
console.log(document.documentElement.parentNode); //#document
