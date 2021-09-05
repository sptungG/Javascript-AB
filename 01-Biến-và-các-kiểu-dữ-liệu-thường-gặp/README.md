**Mon-12/7/2021**

# Bài 2: 2 cách chèn Javascript vào HTML

2 cách sử dụng JS 
* code bên trong html 
* hoặc là bên ngoài 

    ✨ Sẽ sử dụng cách thứ 2: (Tạo file và chèn ở dưới cùng), vì file sẽ đc load từ trên xuống dưới, js sẽ load sau cùng vì khi html load xong rồi sau đó load js thì mới chạy vào đc những cái `DOM`

# Bài 3: Tìm hiểu hàm console.log

`console.log` là 1 hàm dùng để debug, in ra kết quả ở chrome 


# Bài 4: Kiến thức về biến cần nắm

`Biến - Variables`: 
* để lưu giá trị dữ liệu, sử dụng đi sử dụng lại ở nhiều nơi, và khi thay đổi ở 1 chỗ thì có thể thay đổi đc ở nhiều nơi.                 
* khi sử dụng biến thì p nghĩ đến đặt tên (`camelCase`).
* không nên đặt tên tiếng việt, có dấu, kí tự đặc biệt, các từ hệ thống.

# Bài 5: Khai báo biến (`declare`) với const và let

`const`: hằng số, ko thể thay đổi, khai báo hằng số duy nhất để sử dụng đi sử dụng lại ở nhiều chỗ

`let`: biến có thể thay đổi

# Bài 6: Hoisting là gì ?

`Hoisting`: là vấn đề khi khai báo biến, biến đc gọi ra trước khi đc khởi tạo --> ctr lỗi và dừng chạy.

# Bài 6.5: Bổ sung kiến thức Hoisting

* `const` và `let` ko bị hoisting 

* `var` sẽ bị hoisting, có thể xảy ra nhiều vấn đề; từ khi có **let** và **const** thì **var** ít đc dùng. 

TH: khai báo biến chưa gán giá trị gì.
```js
var a;
console.log(a); //-> Undefined
```

TH: hoisting
```js
console.log(a); 
var a; //-> Undefined, tương tự khi khai báo var ở trên console.log
```
==> `var a` đã được tự động đưa lên trên dù đã khai báo sau (hoisting) -> sẽ xảy ra những vấn đề ko mong muốn 

---

### 1. Output là gì?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` và `undefined`
- B: `Lydia` và `ReferenceError`
- C: `ReferenceError` và `21`
- D: `undefined` và `ReferenceError`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: D

Trong hàm chúng ta đã khai báo biến `name` với `var`. Điều đó có nghĩa là biến này sẽ được hoisted (một vùng nhớ sẽ được set up khi biến được khởi tạo) với giá trị mặc định là `undefined`, cho tới khi chúng ta thực sự định nghĩa biến đó. Trong hàm này, chúng ta chưa hề định nghĩa biến `name` tại dòng mà ta log ra, vậy nên giá trị mặc định của nó vẫn là `undefined`.

Các biến được khai báo với keyword `let` (và `const`) cũng được hoisted nhưng không giống như `var`, chúng không được <i>khởi tạo</i>. Chúng ta sẽ không thể truy cập chúng cho tới khi chúng ta khai báo (khởi tạo) chúng. Người ta gọi đó là "temporal dead zone". Khi ta truy cập đến một giá trị trước khi chúng được khai báo, JavaScript sẽ throws một `ReferenceError`.

</p>
</details>

---

### 2. Output sẽ là gì?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` and `0 1 2`
- B: `0 1 2` and `3 3 3`
- C: `3 3 3` and `0 1 2`

<details><summary><b>Đáp án</b></summary>
<p>

#### Đáp án: C

Bởi vì event queue trong JavaScript, hàm `setTimeout` callback sẽ được gọi _sau khi_ vòng lặp được thực hiện. Bời vì biến `i` trong vòng lặp đầu tiên được khai báo với từ khóa `var`, nên nó sẽ là một biến global. Trong suốt vòng lặp, mỗi lần chúng ta tăng giá trị của `i` lên `1`, sử dụng phép toán `++`. Cho tới khi callback `setTimeout` được gọi, giá trị của `i` đã trở thành `3` rồi.

Trong vòng lặp thứ 2, biến `i` được khai báo với từ khóa `let`, có nghĩa nó là một biến block-scoped (block là những gì được viết bên trong cặp ngoặc `{ }`). Tại mỗi vòng lặp, `i` sẽ là một biến mới có một giá trị mới, và giá trị đó có scope là bên trong vòng lặp mà thôi.

</p>
</details>

---