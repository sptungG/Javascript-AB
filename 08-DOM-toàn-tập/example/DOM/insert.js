// 1. element.insertAdjacentText(position, text)
// chèn text vào 4 vị trí
const h3 = document.querySelector("h3");
// h3.insertAdjacentText("position","text");
// position: beforebegin, afterbegin, beforeend, afterend
h3.insertAdjacentText("beforebegin", "begin");
h3.insertAdjacentText("afterbegin", "afterbegin");
h3.insertAdjacentText("beforeend", "beforeend");
h3.insertAdjacentText("afterend", "afterbegin");

// 2. element.insertAdjacentElement(position, node)
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforeend", strong);

// 3. element.insertAdjacentHTML()
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
document.body.insertAdjacentHTML("beforeend",template);
// -> làm nhiều
