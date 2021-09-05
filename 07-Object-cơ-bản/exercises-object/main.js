// 1. Viết 1 function kiểm tra value có phải là object hay ko.
// typeof === "object"
// {} [] null -> object
function isObject(value) {
  if (typeof value === "object" && !Array.isArray(value) && value !== null)
    return true;
  return false;
}
console.log(isObject(null));
console.log(isObject([]));
console.log(isObject({}));

// 2. {a:1, b:2,} -> [["a":1],["b":2]]
function objectToArray(obj) {
  if (!isObject(obj)) return;
  // *
  // return Object.entries(obj);
  // **
  // const value = Object.keys(obj).map((item) => [item, obj[item]]);
  // return value; // [Array(2), Array(2)]
  // ***
  let result = [];
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      //nếu obj chứa key trả về true, ngc lại thì false
      result.push([key, obj[key]]);
    }
  }
  return result; //(2) [Array(2), Array(2)]
}
console.log(objectToArray({ a: 1, b: 2 })); //[Array(2), Array(2)]

// 3. ({a:1,b:2},"b") -> {a:1}
let input = {
  a: 1,
  b: 2,
  c: 3,
};
function without(obj, ...key) {
  // console.log(key);
  const newObj = { ...obj };

  key.forEach((item) => {
    //duyệt qua 1 mảng nhưng ko trả về 1 mảng mới
    delete newObj[item];
  });
  return newObj;

  // delete obj[key]; //-> chỉ xóa đc 1 key
  // return obj;
  // -> PROBLEM: Obj gốc cũng bị xóa
}
console.log(without(input, "a", "b")); //{c: 3},

// 4. ({a:1,b:2},({a:1,b:2}) -> true
//    ({a:1,b:2},{a:1,b:2,c:3}) -> false
function isEqualObject(obj1, obj2) {
  // check keys length of two objects
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  // check values of two object
  // [a,b] -> object[a] || object[b]
  return Object.keys(obj1).every((key) => obj1[key] === obj2[key]);
}
console.log(
  `check Equal:  ${isEqualObject({ a: 1, b: 2 }, { a: 1, b: 4, })}`
);
