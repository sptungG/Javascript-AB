//*** Làm những cái liên quan đến thời gian, hiển thị giờ, phút giây, đếm ngược, tính toán liên quan đến thời gian
const now = new Date(); //built-in Obj
console.log(now);
// Mon Jul 26 2021 04:23:47 GMT+0700 (Indochina Time)
// Time zone: GMT+0700 (Indochina Time)
// Second:
// Minute:
// Hour:
// Year:
// Month:
// Day:
// Day of the week:
// --------------------------------------------------
//*** Timestamp && Epoch time
// Timestamp: dựa trên Unix time, dựa vào Epoch time múi giờ khởi tạo vào 00:00 1/1/1970
console.log(now.getTime()); 
//timestamp 1627248579059,(ms) dựa vào epoch time 
// -> tính toán +-*/, countdown, mấy ngày nữa hết hạn coupon, event 
// --------------------------------------------------
// 4 cách sử dụng new Date()
// * new Date()
// ** new Date(timeStamp) ->dựa vào timeStamp để in ra ngày, giờ, ..
// *** new Date(date string) -> nhiều kiểu,hiển thị ngày;tháng;năm
// **** new Date(year, month, day, hours, minutes, seconds, milliseconds) ->
console.log(new Date(1627248579059)); //Mon Jul 26 2021 04:29:39 GMT+0700 (Indochina Time)
console.log(new Date("Mon Jul 26 2021 04:29:39 GMT+0700 (Indochina Time)")); //Mon Jul 26 2021 04:29:39 GMT+0700 (Indochina Time)
console.log(new Date(2021,6,1,23,23,23,23)); //Thu Jul 01 2021 23:23:23 GMT+0700 (Indochina Time), July do 0 là thắng 1-> 6 là tháng 7
// --------------------------------------------------
// get -> truy xuất
// getFullYear
const birthday = new Date(2000,10,16);
// in ra năm
console.log(birthday.getFullYear()); //2000
// in ra tháng
// getMonth() chạy từ 0->11
// 0 -> tháng 1
console.log(birthday.getMonth());//10
// in ra ngày của thắng 1->31
console.log(birthday.getDate());//16
// in ra thứ 0->6 
// 0-> CN, 6->T7
console.log(birthday.getDay());//4
// in ra giờ
console.log(birthday.getHours());
console.log(birthday.getMinutes());
console.log(birthday.getSeconds());
console.log(birthday.getMilliseconds());
// in ra timeStamp
console.log(birthday.getTime()); //974307600000
// --------------------------------------------------
//  set -> thiết lập
// in ra năm
console.log(`My birthday:${birthday}`);
birthday.setFullYear(2001);
birthday.setMonth(11);
birthday.setDate(30);
birthday.setHours(10);
birthday.setMinutes(11);
birthday.setSeconds(11);
birthday.setMilliseconds(122);
// birthday.setTime(45464564564);
console.log(`My New birthday:${birthday}`);
// --------------------------------------------------
// UTC in Date -> làm những múi giờ quốc tế
// in ra năm
console.log(birthday.getUTCFullYear()); //2000
// in ra tháng
// getUTCMonth() chạy từ 0->11
// 0 -> tháng 1
console.log(birthday.getUTCMonth());//10
// in ra ngày của thắng 1->31
console.log(birthday.getUTCDate());//15
// in ra thứ 0->6 
// 0-> CN, 6->T7
console.log(birthday.getUTCDay());//17
// in ra giờ
console.log(birthday.getUTCHours());
console.log(birthday.getUTCMinutes());
console.log(birthday.getUTCSeconds());
console.log(birthday.getUTCMilliseconds());
// in ra timeStamp
// --------------------------------------------------
// Các hàm Date khác
// *** new Date(date string) -> nhiều kiểu,hiển thị ngày;tháng;năm
// những chuỗi hợp lệ về ngày tháng năm
console.log(now.toDateString());//Mon Jul 26 2021
console.log(now.toTimeString());//06:09:40 GMT+0700 (Indochina Time)
console.log(now.toLocaleDateString());//m/dd/yyyy 7/26/2021
console.log(now.toLocaleDateString("vi-VI"));// 26/7/2021
console.log(now.toISOString());// 2021-07-25T23:11:59.031Z
// --> sau này đc trả data thời gian khác nhau sẽ biết nhận diện để chuyển đổi thành thời gian để tính toán -> ra đc kết quả mong muốn
// --------------------------------------------------
// in ra số 0 ở tháng 26/07/2021
// input: Mon Jul 26 2021 04:29:39 GMT+0700 (Indochina Time)
console.log(new Date("Mon Jul 6 2021 04:29:39 GMT+0700 (Indochina Time)").toLocaleDateString("vi-VI"));// -> 26/7/2021
const myTime = new Date("Mon Jul 6 2021 04:29:39 GMT+0700 (Indochina Time)");
const myYear = myTime.getFullYear();
const myMonth = myTime.getMonth()+1;
const myDate = myTime.getDate();
console.log(myYear,myMonth,myDate);
const prefixMonth = myMonth < 10 ? "0" : "";
const prefixDate = myDate < 10 ? "0" : "";

console.log(`${prefixDate}${myDate}/${prefixMonth}${myMonth}/${myYear}`);
// --------------------------------------------------
// setTimeOut vs. setInterval
// setTimeOut: dùng trong 1 khoảng thời gian nhất định -> hiện thông báo
// setInterval: đếm ngược nhạn quà

const timer = setTimeout(function(){
  console.log("Me after 3sec");
}, 3000);
clearTimeout(timer);
// clearInterval(timer);
// clearInterval(
// setInterval(function(){
//   console.log("10sec later!!!");
// }, 10000) //chạy liên tục,-> hao tổn tài nguyên -> clearInterval && gán vào biến
// );
// --------------------------------------------------
