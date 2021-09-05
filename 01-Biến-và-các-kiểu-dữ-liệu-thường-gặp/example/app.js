console.log("Hello World!!");
function sayHi() {
  console.log(name); //undefined
  // console.log(age); //Uncaught ReferenceError: Cannot access 'age' before initialization
  var name = "Lydia";
  let age = 21;

}

sayHi();
