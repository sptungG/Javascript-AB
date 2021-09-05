// 1. Viết ctr nhập vào năm sinh và in ra số tuổi
// 2. CountUp timer với input đc nhập vào, in ra thông báo khi hết giờ
// 3. timeSince, input là thời gian và tính thời gian đầu vào với thời gian hiện tại. VD bạn A online r offline -> bạn A đã online đc 3 phút, 3 giây, ....

// 1.
// const birthYear = prompt("Enter your birthday year: ");
// const nowYear = new Date().getFullYear();
// console.log(`Your age: ${nowYear - birthYear}`);

function getAge(year = 0) {
  if (typeof year !== "number") {
    return 0;
  }
  const now = new Date();
  const currentYear = now.getFullYear();
  return currentYear - year;
}
const yourAge = getAge();
console.log(`Currently, your age is: ${yourAge}`);
// 2.
function CountUp(minutes = 1) {
  let seconds = minutes*60;
  let counter  = 0;
  const timer = setInterval(function(){
    counter = counter +1;
    console.log(counter);
    if (counter === seconds) {
      clearInterval(timer);
      console.log("Your time is end!");
    }
  }, 1000);
}
// CountUp(1);
// 3.
// 1 năm = 365*24*60*60 = 31536000
// 1 tháng = 31*24*60*60 = 2678400
// 1 ngày = 24*60*60 = 86400
// 1 giờ = 60*60 = 3600
// 1 phút = 60
function timeSince(date) {
  // currentTime - date
  const now = new Date();
  const newDate = new Date(date);
  const seconds = Math.floor((now.getTime() - newDate.getTime())/1000);
  console.log(seconds); 
  if(seconds < 0){
    alert("Your time is invalid");
  }
  let timer = seconds/31536000;
  if (timer>1) {
    console.log(`${Math.floor(timer)} years ago.`);
    return;
  }
  timer = seconds/2678400;
  if (timer>1) {
    console.log(`${Math.floor(timer)} months ago.`);
    return;
  }
  timer = seconds/86400;
  if (timer>1) {
    console.log(`${Math.floor(timer)} days ago.`);
    return;
  }
  timer = seconds/3600;
  if (timer>1) {
    console.log(`${Math.floor(timer)} hours ago.`);
    return;
  }
  timer = seconds/60;
  if (timer>1) {
    console.log(`${Math.floor(timer)} minutes ago.`);
    return;
  }
  timer = seconds;
  if (timer>1) {
    console.log(`${Math.floor(timer)} seconds ago.`);
    return;
  }
}
timeSince("Mon Jul 26 2021 08:03:39 GMT+0700 (Indochina Time)");