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

// replaceChild
// node.replaceChild(newNode, oldNode);
const span = document.createElement("span");
span.textContent = "abc";
document.body.replaceChild(span, document.querySelector(".boxed"));

// Convert HTML collection, NodeList -> Array
// *
const li = document.getElementsByClassName("item");
// * Array.from(HTML collection or NodeList)

// ** [...HTML collection] ; [...NodeList]
// li.forEach((item) => item); //ERROR: li.forEach is not a function
[...li].forEach((item) => item);
console.log(li); //HTMLCollection(5) [li.item.item1, li.item.item2, li.item.item3, li.item.item4, li.item.item5]

// html body head title -> duy nhất
// html: document.documentElement
// body: document.body
// head: document.head
// title: document.title