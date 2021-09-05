## _Chương 9: Tất tần tật về sự kiện trong Javascript_

# Bài 149: Giới thiệu

```js
// 1. Sự kiện (event)? Là những cái tương tác với DOM, ...
// 2. Thêm 1 sự kiện
// selector.addEventListener("eventName", handler(function), [optional]);
// evenName: keydown, keypress, keyup, mouseover, mousemove, mouseleave, load, DOMContentLoaded ,....
// handler: function
// capture. bubbling
```

# Bài 150: Sự kiện click

```js
// click
const button = document.querySelector(".button");
// *
button.addEventListener("click", function () {
  console.log("Click me");
});
// **
function handleClick() {
  console.log("Click Button");
}
// button.addEventListener("click",handleClick()); // lỗi sai khi dùng function vào eventListener
button.addEventListener("click", handleClick);
```

# Bài 151: Bubbling trong click

```html
<button class="button">
  <span>Button</span>
</button>
```

```js
// Bubbling: nổi bọt
// khi phần tử có nhiều sự kiện
const button = document.querySelector(".button");
const span = document.querySelector("span");

span.addEventListener("click", function () {
  console.log("Click Span");
});
button.addEventListener("click", function () {
  console.log("Click Button");
});
// khi mà click vào span thì đồng thời click vào cả button
// sự kiện click ,chạy từ trong ra ngoài
// -> Click Span
// -> Click Button

//✅ Ngăn chạn nổi bọt? -> e.stopPropagation();
span.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Click Span");
});
// -> Click Span
```

```html
<button class="button">
  <span>Button</span>
</button>
```

```js
// PROBLEM: 2 event click -> ra cả 2
span.addEventListener("click", function () {
  // e.stopPropagation();
  console.log("Click Span");
});
span.addEventListener("click", function () {
  console.log("Click Span 2");
});
// -> Click Span
// -> Click Span2
```

```js
// Khắc phục -> dùng e.stopImmediatePropagation() ở sự kiện trước
span.addEventListener("click", function (e) {
  e.stopImmediatePropagation();
  console.log("Click Span");
});
span.addEventListener("click", function () {
  console.log("Click Span 2");
});
// -> Click Span
```

# Bài 152: Capturing trong click

```html
<body>
  <button class="button">
    <span>Button</span>
  </button>
</body>
```

```js
// *** Bubbling
span.addEventListener("click", function () {
  console.log("Click Span");
});
button.addEventListener("click", function () {
  console.log("Click Button");
});
document.body.addEventListener("click", function () {
  console.log("Click Body");
});
// -> Click Span
// -> Click Button
// -> Click Body
```

```js
// *** Capturing: ngược lại với Bubbling, từ ngoài vào trong
// => selector.addEventListener("eventName", handler(function), [optional]);
// optional là 1 Object
const capturing = {
  capture: true,
};
span.addEventListener(
  "click",
  function () {
    console.log("Click Span");
  },
  capturing
);
button.addEventListener(
  "click",
  function () {
    console.log("Click Button");
  },
  capturing
);
document.body.addEventListener(
  "click",
  function () {
    console.log("Click Body");
  },
  capturing
);
// -> Click Body
// -> Click Button
// -> Click Span
```

# Bài 153: Sự khác nhau giữa target và currentTarget

```html
<body>
  <button class="button">
    <span>Button</span>
  </button>
</body>
```

```js
// target và currentTarget xuất hiện khi gọi sự kiện
button.addEventListener("click", function (e) {
  console.log("event.target " + e.target);
  // -> event.target [object HTMLSpanElement]

  console.log("event.currentTarget " + e.currentTarget);
  // -> event.currentTarget [object HTMLButtonElement]

  // Click vào button -> (console 2 cái button)   <button class="button"> <span>Button</span> </button>
  // Click vào Span -> <span>Button</span>
  //                -> <button class="button"> <span>Button</span> </button>
  // =>
  // event.target: chọn chính xác phần tử element click tới
  // event.currentTarget: chọn phần tử mình click, ko quan tâm thẻ bên trong
});
```

# Bài 154: preventDefault() để làm gì ?

```html
<a href="http://evondev.com" class="link">evondev.com</a>
```

```js
// khi click vào thẻ a thì sẽ mặc định load sang 1 trang web khác
// -> khi muốn ko load nữa, hoặc thực hiện hành động khác
// event.preventDefault() -> ngăn chặn hành vi mục đích nào đó
const link = document.querySelector(".link");
link.addEventListener("click", function (e) {
  e.preventDefault(); //-> ngăn chặn hành vi mặc định,
  // ví dụ: mặc định là "submit" form thì load lại trang, bấm thẻ a thì load cái web,... -> ngăn chặn
  console.log("Click me");
});
```

# Bài 155: Bài tập `Random background color`

```html
<body>
  <button class="change">Change Color</button>
</body>
```

```js
const button = document.querySelector(".change");
button.addEventListener("click", handleColor);
const colors = ["#ffa400", "#00aefd", "#07a787", "#e74c3c"];
function handleColor(params) {
  console.log(colors[Math.floor(Math.random() * colors.length)]);
  // document.body.setAttribute("style", "background-color: red");
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
```

# Bài 156: Bài tập `Counter`

```html
<body>
  <div class="counter">
    <button class="counter-decrease">
      <i class="fa fa-minus"></i>
    </button>
    <h1 class="counter-number">0</h1>
    <button class="counter-increase">
      <i class="fa fa-plus"></i>
    </button>
  </div>
  <script src="main.js"></script>
</body>
```

```js
const counterNumber = document.querySelector(".counter-number");
const btnDecrease = document.querySelector(".counter-decrease");
const btnIncrease = document.querySelector(".counter-increase");
let counterValue = parseInt(counterNumber.textContent);

btnIncrease.addEventListener("click", function () {
  if (counterValue >= 10) return 10;
  counterValue++;
  console.log(counterValue);
  counterNumber.textContent = counterValue;
});

btnDecrease.addEventListener("click", function () {
  if (counterValue <= 0) return 0;
  counterValue--;
  console.log(counterValue);
  counterNumber.textContent = counterValue;
});
```

# Bài 157: Tìm hiểu object style

```js

```

# Bài 158: Truy xuất giá trị của custom attribute như nào?

```js

```

# Bài 159-160: Bài tập `Toggle menu`

```js

```

# Bài 161-162-163: Bài tập `Tab`

```js

```

# Bài 164-165-166: Bài tập `Accordion`

```js

```

# Bài 167-168: Bài tập `Modal`

```js

```

# Bài 169-170-171-172-173: Bài tập `Lightbox`

```js

```

# Bài 174-175: Bài tập `Dropdown`

```js

```

# Bài 176: Sự khác nhau giữa load và DOMContentLoaded

```js

```

# Bài 177: Sự kiện di chuyển chuột cần nắm

```js

```

# Bài 178: Sự khác nhau giữa clientXY và pageXY

```js

```

# Bài 179-180-181-182: Bài tập `Tooltip`

```js

```

# Bài 183-184: Bài tập `Link hover effect`

```js

```

# Bài 185-186-187-188-189: Bài tập `Image Zoom hover effect`

```js

```

# Bài 190: Sự kiện keydown

```js

```

# Bài 191: Sự kiện keyup

```js

```

# Bài 192: Sự kiện keypress

```js

```

# Bài 193: Sự kiện change

```js

```

# Bài 194: Sự kiện focus và blur

```js

```

# Bài 195: Sự kiện submit trong form

```js

```

# Bài 196: Truy xuất các giá trị trong cơ bản

```js

```

# Bài 197: Truy xuất giá trị của checkboxes như thế nào?

```js

```

# Bài 198: Ví dụ về Form Validation cơ bản

```js

```

# Bài 199: Bài tập `Show hide password` đơn giản

```js

```

# Bài 200-201-202-203-204: Bài tập `Highlight search text`

```js

```

# Bài 205: Giới thiệu sự kiện scroll

```js

```

# Bài 206: Debounce là gì?

```js

```

# Bài 207: window.pageXOffset và window.pageYOffset

```js

```

# Bài 208: Các phương thức, thuộc tính về scroll khác

```js

```

# Bài 209: offsetWidth và scrollWidth

```js

```

# Bài 210: scrollIntoView()

```js

```

# Bài 211-212: Bài tập `Fixed Header`

```js

```

# Bài 213-214: Bài tập `Progress Bar`

```js

```

# Bài 215-216: Bài tập `Tab Scroll`

```js

```

# Bài 217-218-219-220-221: Bài tập `Tab Scroll nâng cao`

```js

```

# Bài 222: localStorage toàn tập

```js

```

# Bài 223-224-225-226-227: Bài tập `todoList`

```js

```

# Bài 228-229: Bài tập `Sweet Alert`

```js

```

## _Chương 10: Regular expression cơ bản_
