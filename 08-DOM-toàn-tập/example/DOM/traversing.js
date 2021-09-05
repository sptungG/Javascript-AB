// Truy xuất phần tử trong DOM

// 1. parentNode, parentElement, removeChild
// parentNode vs. parentElement
// -> lấy phần tử cha
const span = document.querySelector("span");
console.log(span.parentNode.parentNode);
console.log(span.parentElement.parentElement);
// removeChild
// selector.parentNode hoặc selector.parentElement .removeChild(selector)
// span.parentElement.removeChild(span); //hay dùng
// span.remove(); //có thể ko hỗ trợ trên vài trình duyệt

// 2. nextElementSibling: tìm tới phần tử đứng sau
//    & previousElementSibling: tìm tới phần tử đứng trc
const spanNext = span.nextElementSibling;
console.log(spanNext); //span3
const spanPre = span.previousElementSibling;
console.log(spanPre); //a.link
// -> check điều kiện nếu có thẻ ở trước/sau thì mới thực hiện cái gì đó

// 3. childNodes: trả về hết các node bên trong, bao gồm textNodes
//    vs children: cũng trả về hết, ko bao gôm textNodes
console.log(span.childNodes); //NodeList(3) [text, strong, text]
console.log(span.children); //HTMLCollection [strong]

// 4. firstChild: lấy phần tử con đầu tiên cả text
//  vs. firstElementChild: lấy Element con đầu tiên
console.log(span.firstChild); //"Lorem ipsum dolor."
console.log(span.firstElementChild); //<strong>Strong</strong>

// 5. lastChild: lấy phần tử con cuối cả text
//  vs. lastElementChild: lấy Element con cuối
console.log(span.lastChild); //#text
console.log(span.lastElementChild); //<strong>Strongggg</strong>

// 6. 
// span.nextSibling: nếu có text và thẻ đằng sau, thì ưu tiên lấy text
// span.previousSibling: nếu có text và thẻ đằng trước, thì ưu tiên lấy text

