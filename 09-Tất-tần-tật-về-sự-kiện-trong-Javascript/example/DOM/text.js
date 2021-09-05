//text: phần nằm giữa thẻ tag
// 1. textContent
const spinner = document.querySelector("#spinner");
// Thay đổi textContent
// spinner.textContent = "Hello";
console.log(spinner.textContent); //.....Helloooo

// 2. innerText ~textContent
// khác: nếu bên trong thẻ đó có thẻ style display:none thì sẽ ko lấy text đc
// loại bỏ hết khoảng trắng, xuống dòng,..
console.log(spinner.innerText); //.....
// -> textContent đc sử dụng nhiều hơn

// 3. innerHTML
// lấy ra nội dung của selector và cả các thẻ bên trong
console.log(spinner.innerHTML); //.....<strong style="display: none;">Helloooo</strong>
// parse
spinner.innerHTML = `<div class="demo">Hello World</div>`;
// -> truyền vào <div class="demo">Hello World</div> 
