function keepEvenValues(obj) {
  let newObj = {};
  Object.keys(obj).forEach(key => {
    if (obj[key] % 2 === 0) {
      newObj[key] = obj[key];
    }
  })

  return newObj;
}

let myObj = { a: 1, b: 2, c: 3, d: 4 };

console.log(keepEvenValues(myObj))