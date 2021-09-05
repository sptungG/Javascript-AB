
// 1. selector.classList.add("abc")
const container = document.querySelector(".container");
container.classList.add("is-active", "is-abc");

// 2. selector.classList.remove("abc")
container.classList.remove("is-active");

// 3. selector.classList.contains("abc")
console.log(container.classList.contains("abc")); //false
console.log(container.classList.contains("container")); //true

// 4. selector.classList.toggle("abc")
// -> toggle Menu
// nếu có class đó rồi thì sẽ bị remove đi, nếu chưa có thì sẽ đc add vào
container.classList.toggle("is-active");

//5. selector.className -> chuỗi các class của selector
const title = document.querySelector(".title");
console.log(title.className); //title abc xyz aaa
title.className = "title";
