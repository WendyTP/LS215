/* first try
function totalArea(rectangles) {
  return rectangles.reduce((sum,rectangle) => 
    sum += (rectangle[0] * rectangle[1]),0);
}
*/

/* given solution:
  The solution should first map the two dimensional array into a single dimensional array of rectangle areas,
  then reduce this array to a single number by summing all the areas.
*/

function totalArea(rectangles) {
  let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
  return areas.reduce((sum, area ) => sum + area);
}

let myRectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(myRectangles));