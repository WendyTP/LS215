let min = Infinity;
let max = -Infinity;
let arr = [4,5,12,23,3]

arr.forEach(value => {
  if (value >= max) {
    max = value;
  }
  
  if (value <= min) {
    min = value;
  }
})

console.log(min, max)
