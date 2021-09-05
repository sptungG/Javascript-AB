## _Chương 8: DOM toàn tập_

# Bài 109: DOM là gì ?

```js
// DOM
// Document Object Model
// DOM attribute: href type ...
// DOM node: html, header, div, .... tags
```

# Bài 110: document.querySelector

```js
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
```

# Bài 111: document.querySelectorAll

```js
// **  2.2. document.querySelectorAll("selector");
// -> trả về 1 NodeList chứa danh sách các node, nếu ko có thì trả về empty NodeList
// mảng nhưng ko phải mảng: nó có thể loop và forEach
//                          nhưng ko thể sử dụng những phương thức trong mảng như push, pop, shift, map, filter ,...

// const multiNodes = document.querySelector(".item"); //-> chỉ lấy .item đầu tiên
const multiNodes = document.querySelectorAll(".item"); //NodeList(5) [li.item, li.item, li.item, li.item, li.item]
console.log(multiNodes);
```

# Bài 112: document.getElementsByClassName

```js
// *** 2.3. document.getElementsByClassName(.class);
// -> trả về 1 HTMLCollection ~NodeList chứa danh sách các node, nếu ko có thì trả về empty []
const classNodes = document.getElementsByClassName("item");
console.log(classNodes); //HTMLCollection(5) [li.item, li.item, li.item, li.item, li.item]
// *** HTMLCollection vs. NodeList --> Later
```

# Bài 113: document.getElementsByTagName

```js
// **** 2.4. document.getElementsByTagName("tagName");
// -> trả về 1 HTMLCollection ~NodeList chứa danh sách các node, nếu ko có thì trả về empty []
const tagNodes = document.getElementsByTagName("h1");
console.log(tagNodes); //HTMLCollection [h1]
```

# Bài 114: document.getElementById

```js
// ***** 2.5. document.getElementById("id");
// -> trả về 1 Node
const idNode = document.getElementById("spinner");
console.log(idNode);
// => querySelector(tag, class, id) querySelectorAll(tag, class, id) hay đc dùng hơn
```

# Bài 115: getAttribute

```js
// * 3. selector.getAttribute("attribute") -> lấy ra giá trị attribute của selector
// selector: 1 cái
// attribute ~ thuộc tính: href, id, class, style, src
// dựa vào selector -> chọn attribute
const link = document.querySelector(".link");
console.log(link.getAttribute("href")); //evondev.com
// if(link){
// }
const li = document.querySelectorAll(".item");
li.forEach((item) => {
  console.log(item.getAttribute("class"));
});
```

# Bài 116: setAttribute

```js
// ** 4. selector.setAttribute("attribute", value);
// -> set giá trị cho attribute nào đó của selector
// yêu cầu: thêm attribute target = "_blank" mà ko vào sửa file html, để nhấn vào
link.setAttribute("target", "_blank");
// PROBLEM: chỉ có thẻ a đầu tiên có target _blank
// -> querySelectorAll
const listLinks = document.querySelectorAll("a.link");
listLinks.forEach((item) => {
  item.setAttribute("target", "_blank ");
});
```

# Bài 117: removeAttribute

```js
// *** 5. selector.removeAttribute("attribute"); -> xóa attribute của selector
const p = document.getElementById("spinner");
p.removeAttribute("style");
// -> xóa nhiều attribute, chạy loop như trên
```

# Bài 118: hasAttribute

```js
// **** 6. selector.hasAttribute("attribute") -> nếu có trả về true, ko thì false
// -> kiểm tra đã có attribute đó chưa, chưa thì add vào
console.log(p.hasAttribute("class"));
console.log(p.hasAttribute("id"));
// if (p.hasAttribute("id")) {
//   // CODE
// }
```

# Bài 119: Thuộc tính textContent

```js
//text: phần nằm giữa thẻ tag
// * 1. textContent
const spinner = document.querySelector("#spinner");
// Thay đổi textContent
// spinner.textContent = "Hello";
console.log(spinner.textContent); //.....Helloooo
```

# Bài 120: Thuộc tính innerText

```js
// ** 2. innerText ~textContent
// khác: nếu bên trong thẻ đó có thẻ style display:none thì sẽ ko lấy text đc
// loại bỏ hết khoảng trắng, xuống dòng,..
console.log(spinner.innerText); //.....
// -> textContent đc sử dụng nhiều hơn
```

# Bài 121: Thuộc tính innerHTML

```js
// *** 3. innerHTML
// lấy ra nội dung của selector và cả các thẻ bên trong
console.log(spinner.innerHTML); //.....<strong style="display: none;">Helloooo</strong>
// parse
spinner.innerHTML = `<div class="demo">Hello World</div>`;
// -> truyền vào <div class="demo">Hello World</div>
```

# Bài 122-123: Các phương thức về class

```js
// * 1. selector.classList.add("abc")
const container = document.querySelector(".container");
container.classList.add("is-active", "is-abc");

// ** 2. selector.classList.remove("abc")
container.classList.remove("is-active");

// *** 3. selector.classList.contains("abc")
console.log(container.classList.contains("abc")); //false
console.log(container.classList.contains("container")); //true

// **** 4. selector.classList.toggle("abc")
// -> toggle Menu
// nếu có class đó rồi thì sẽ bị remove đi, nếu chưa có thì sẽ đc add vào
container.classList.toggle("is-active");

// ***** 5. selector.className -> chuỗi các class của selector
const title = document.querySelector(".title");
console.log(title.className); //title abc xyz aaa
title.className = "title";
```

# Bài 124: Ví dụ toggle menu đơn giản với toggle class _[Toggle Menu]()_

# Bài 125: document.createElement và document.appendChild

```js
// CRUD node in Js
// * 1. Tạo ra Element trong Js: document.createElement("element")
// element: tag
const div = document.createElement("div");

// ** 2. selector.appendChild
// document.body -> thẻ body
// document.querySelector("body")
document.body.appendChild(div);

div.classList.add("container");
div.className = "container wrapper";
div.textContent = "Lorem";
div.innerHTML = `<h3 class="title">Title</h3>`;
div.setAttribute("data-name", "evondev");
```

# Bài 126: Thực hành phương thức document.appendChild

```js
// Tạo html img
const card = document.createElement("div");
const img = document.createElement("img");
card.classList.add("card");
img.classList.add("card-image");
img.setAttribute("src", "https://source.unsplash.com/random");
img.setAttribute("style", "width: 300px; height: 300px; object-fit: cover;");
document.body.appendChild(card);
card.appendChild(img);
```

# Bài 127: document.createTextNode

```js
// *** 3. document.createTextNode
const text = document.createTextNode("Helloooooooooooooo");
const h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.appendChild(text); //<h1>Helloooooooooooooo</h1>
```

# Bài 128: Phương thức cloneNode

```js
// **** 4. cloneNode
const h1Clone = h1.cloneNode(true);
// true -> copy cả chữ bên trong
// ko để gì -> chỉ lấy tag
document.body.appendChild(h1Clone);
```

# Bài 129: Phương thức hasChildNodes

```js
// ***** 5. hasChildNodes
// kiểm tra có phần tử con hay ko
// có -> true, ko -> false
console.log(h1.hasChildNodes()); //true
```

# Bài 130: Phương thức insertAdjacentText

```html
<!-- beforebegin -->
<h3>
  <!-- afterbegin -->
  <a href="#" class="link">demo</a>
  <span class="span">
    Lorem ipsum dolor.
    <strong>Strong</strong>
    <strong>Strongggg</strong>
  </span>
  <span class="span3"> Lorem ipsum </span>
  <!-- beforeend -->
</h3>
<!-- afterend -->
```

```js
// * 1. element.insertAdjacentText(position, text)
// chèn text vào 4 vị trí
const h3 = document.querySelector("h3");
// h3.insertAdjacentText("position","text");
// position: beforebegin, afterbegin, beforeend, afterend
h3.insertAdjacentText("beforebegin", "begin");
h3.insertAdjacentText("afterbegin", "afterbegin");
h3.insertAdjacentText("beforeend", "beforeend");
h3.insertAdjacentText("afterend", "afterbegin");
```

# Bài 131: Phương thức insertAdjacentElement

```js
// ** 2. element.insertAdjacentElement(position, node)
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforeend", strong);
```

# Bài 132: Phương thức insertAdjacentHTML

```js
// *** 3. element.insertAdjacentHTML()
/* 
<ul class="menu">
<li class="item item1">1item</li>
<li class="item item2">2item</li>
<li class="item item3">3item</li>
<li class="item item4">4item</li>
<li class="item item5">5item</li>
</ul>;
*/
const template = `
<ul class="menu">
<li class="item item1">1item</li>
<li class="item item2">2item</li>
<li class="item item3">3item</li>
<li class="item item4">4item</li>
<li class="item item5">5item</li>
</ul>
`;
document.body.insertAdjacentHTML("beforeend", template);
// -> làm nhiều
```

# Bài 133-134-135: `Traversing DOM`

```js
// Truy xuất phần tử trong DOM

// * 1. parentNode, parentElement, removeChild
// parentNode vs. parentElement
// -> lấy phần tử cha
const span = document.querySelector("span");
console.log(span.parentNode.parentNode);
console.log(span.parentElement.parentElement);
// removeChild
// selector.parentNode hoặc selector.parentElement .removeChild(selector)
// span.parentElement.removeChild(span); //hay dùng
// span.remove(); //có thể ko hỗ trợ trên vài trình duyệt

// ** 2. nextElementSibling: tìm tới phần tử đứng sau
//       & previousElementSibling: tìm tới phần tử đứng trc
const spanNext = span.nextElementSibling;
console.log(spanNext); //span3
const spanPre = span.previousElementSibling;
console.log(spanPre); //a.link
// -> check điều kiện nếu có thẻ ở trước/sau thì mới thực hiện cái gì đó

// *** 3. childNodes: trả về hết các node bên trong, bao gồm textNodes
//        vs children: cũng trả về hết, ko bao gôm textNodes
console.log(span.childNodes); //NodeList(3) [text, strong, text]
console.log(span.children); //HTMLCollection [strong]

// **** 4. firstChild: lấy phần tử con đầu tiên cả text
//         vs. firstElementChild: lấy Element con đầu tiên
console.log(span.firstChild); //"Lorem ipsum dolor."
console.log(span.firstElementChild); //<strong>Strong</strong>

// ***** 5. lastChild: lấy phần tử con cuối cả text
//       vs. lastElementChild: lấy Element con cuối
console.log(span.lastChild); //#text
console.log(span.lastElementChild); //<strong>Strongggg</strong>

// ****** 6.
// span.nextSibling: nếu có text và thẻ đằng sau, thì ưu tiên lấy text
// span.previousSibling: nếu có text và thẻ đằng trước, thì ưu tiên lấy text
```

# Bài 136-137: Bài tập `Active Modal` _[Modal]()_

# Bài 138-139: Bài tập `Notification` _[Notification]()_

# Bài 140: Các thuộc tính liên quan tới offset

```js
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
```

# Bài 141: Các thuộc tính liên quan tới client

```js
// 2. clientWidth, lấy độ rộng phần tử -border
// clientHeight
// clientLeft: vị trí của nó so với bên trái border
// clientTop
console.log(boxed.clientWidth); //190
console.log(boxed.clientHeight); //190
console.log(boxed.clientLeft); //5
console.log(boxed.clientTop); //5
```

# Bài 142: Các thuộc tính liên quan tới window

```js
// 3. window.innerWidth
// window.outerWidth
// window.innerHeight: lấy chiều cao trong khung hiển thị web
// window.outerHeight
console.log(window.innerHeight);
console.log(window.outerHeight);
console.log(window.innerWidth);
console.log(window.outerWidth);
```

# Bài 143: Tìm hiểu getBoundingClientRect()

```js
// 4. selector.getBoundingClientRect()
// -> lấy ra vị trí-tọa độ, kích thước của phần tử
console.log(boxed.getBoundingClientRect());
// left, x: vị trí của khối so với bên trái
// top: vị trí so với phía trên
// bottom: chiều cao khối + top
// right: độ rộng của khối + left
// width:
// height
// => làm hiệu ứng con trỏ chuột (dựa vào tọa độ)
```

# Bài 144: Sự khác nhau giữa NodeList và HTMLCollection

```js
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
```

# Bài 145: Sự khác nhau giữa parentNode và parentElement

```js
// parentNode vs parentElement
// Node: node ở DOM tree, gồm cả textNode
// Element: thẻ
// parentElement: có thể null
// parentNode: lấy chính nó, nếu ko có parent bao ngoài
// document.documentElement -> lấy thẻ HTML
console.log(document.documentElement.parentElement); //null
console.log(document.documentElement.parentNode); //#document
```

# Bài 146: Tìm hiểu document.title và document.head

```js
// document.title và document.head
// document.title: thay đổi cái title của html
// document.head:
console.log(document.title); //DOM
document.title = "Javascript";
console.log(document.title); //Javascript

console.log(document.head); //<head>...</head>

/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */
const meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1");
// document.head.appendChild(meta);

const head1 = document.getElementsByTagName("head");
head1[0].appendChild(meta);
console.log(head1); //HTMLCollection [head]
```

# Bài 147: Tìm hiểu thêm phương thức insertBefore

```js
// insertBefore:
// parentNode.insertBefore(newNode, existingNode)
const ul = document.querySelector("ul");
console.log(document.querySelector("h3").nextElementSibling);
document.body.insertBefore(ul, document.querySelector("h3").nextElementSibling);
// insertAdjacentElement
// document.querySelector("h3").insertAdjacentElement("beforebegin", ul);
// kết quả ko đổi
// cái khác ở đấy:
// insertAdjacentElement: chỉ insert đc vào 4 vị trí quanh existingNode
// insertBefore: có thể chọn phần tử sau hoặc trước existingNode để insert
```

# Bài 148: Tìm hiểu thêm phương thức replaceChild

```js
// replaceChild
// node.replaceChild(newNode, oldNode);
const span = document.createElement("span");
span.textContent = "abc";
document.body.replaceChild(span, document.querySelector(".boxed"));
```

# Convert HTML collection, NodeList -> Array

```js
// Convert HTML collection, NodeList -> Array
// *
const li = document.getElementsByClassName("item");
// * Array.from(HTML collection or NodeList)

// ** [...HTML collection] ; [...NodeList]
// li.forEach((item) => item); //ERROR: li.forEach is not a function
[...li].forEach((item) => item);
console.log(li); //HTMLCollection(5) [li.item.item1, li.item.item2, li.item.item3, li.item.item4, li.item.item5]
```

## Tổng hợp

```js
// html body head title -> duy nhất
// html: document.documentElement
// body: document.body
// head: document.head
// title: document.title
```

## _Chương 9: Tất tần tật về sự kiện trong Javascript_
