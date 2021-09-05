// 1. Sự kiện (event)? Là những cái tương tác với DOM, ...
// 2. Thêm 1 sự kiện
// selector.addEventListener("eventName", handler(function), [optional]);
// evenName: keydown, keypress, keyup, mouseover, mousemove, mouseleave, load, DOMContentLoaded ,....
// handler: function
// capture. bubbling

// click
const button = document.querySelector(".button");
// *
// button.addEventListener("click", function () {
//   console.log("Click me");
// });
// **
function handleClick() {
  console.log("Click Button");
}
// button.addEventListener("click",handleClick()); // lỗi sai khi dùng function vào eventListener
// button.addEventListener("click", handleClick);

// *** Bubbling: nổi bọt
// sự kiện click chạy từ trong ra ngoài
const span = document.querySelector("span");
// span.addEventListener("click", function () {
//   console.log("Click Span");
// });

// Ngăn chạn nổi bọt? -> e.stopPropagation();
// span.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("Click Span");
// });

// PROBLEM: 2 event click -> ra cả 2
// span.addEventListener("click", function (e) {
//   // e.stopPropagation();
//   e.stopImmediatePropagation();
//   console.log("Click Span");
// });
// span.addEventListener("click", function () {
//   console.log("Click Span 2");
// });
// *** Capturing: ngược lại với Bubbling, từ ngoài vào trong
const capturing = {
  capture: true,
};
// document.body.addEventListener(
//   "click",
//   function () {
//     console.log("Click Body");
//   },
//   capturing
// );
// Click Body
// Click Span

// ****
// target và currentTarget
// button.addEventListener("click", function (e) {
//   console.log("event.target " + e.target);
//   console.log("event.currentTarget " + e.currentTarget);
//   // event.target [object HTMLSpanElement]
//   // event.currentTarget [object HTMLButtonElement]

//   // event.target: chọn chính xác phần tử element click tới
//   // event.currentTarget: chọn phần tử mình click
// });

// *****
// event.preventDefault() -> ngăn chận hành vi mục đích nào đó
const link = document.querySelector(".link");
link.addEventListener("click", function (e) {
  e.preventDefault(); //-> ngăn chặn hành vi mặc định,
  // ví dụ: mặc định là "submit" form thì load lại trang, bấm thẻ a thì load cái web,... -> ngăn chặn
  console.log("Click me");
});
// ******
// .style
// selector.style.property = "value" -> inline-style
button.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(e.target.style);
  // background-color -> backgroundColor
  // position -> position
});
