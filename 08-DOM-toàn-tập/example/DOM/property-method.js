// 3. selector.getAttribute("attribute") -> lấy ra giá trị attribute của selector
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

// 4. selector.setAttribute("attribute", value);
// -> set giá trị cho attribute nào đó của selector
// yêu cầu: thêm attribute target = "_blank" mà ko vào sửa file html, để nhấn vào
link.setAttribute("target", "_blank");
// PROBLEM: chỉ có thẻ a đầu tiên có target _blank
// -> querySelectorAll
const listLinks = document.querySelectorAll("a.link");
listLinks.forEach((item) => {
  item.setAttribute("target", "_blank ");
});

// 5. selector.removeAttribute("attribute"); -> xóa attribute của selector
const p = document.getElementById("spinner");
p.removeAttribute("style");
// -> xóa nhiều cái như trên

// 6. selector.hasAttribute("attribute") -> nếu có trả về true, ko thì false
// -> kiểm tra đã có attribute đó chưa, chưa thì add vào
console.log(p.hasAttribute("class"));
console.log(p.hasAttribute("id"));
// if (p.hasAttribute("id")) {
//   // CODE
// }

