// document.createElement và document.appendChild
// CRUD node in Js
// 1. Tạo ra Element trong Js: document.createElement("element")
// element: tag
const div = document.createElement("div");

// 2. selector.appendChild
// document.body -> thẻ body
// document.querySelector("body")
document.body.appendChild(div);

div.classList.add("container");
div.className = "container wrapper";
div.textContent = "Lorem";
div.innerHTML = `<h3 class="title">Title</h3>`;
div.setAttribute("data-name", "evondev");
// Tạo html img
const card = document.createElement("div");
const img = document.createElement("img");
card.classList.add("card");
img.classList.add("card-image");
img.setAttribute("src", "https://source.unsplash.com/random");
img.setAttribute("style", "width: 300px; height: 300px; object-fit: cover;");
document.body.appendChild(card);
card.appendChild(img);

// 3. document.createTextNode
const text = document.createTextNode("Helloooooooooooooo");
const h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.appendChild(text); //<h1>Helloooooooooooooo</h1>

// 4. cloneNode
const h1Clone = h1.cloneNode(true);
// true -> copy cả chữ bên trong
// ko để gì -> chỉ lấy tag
document.body.appendChild(h1Clone);

// 5. hasChildNodes
// kiểm tra có phần tử con hay ko
// có -> true, ko -> false
console.log(h1.hasChildNodes()); //true

