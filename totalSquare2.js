/*
question: calculate the total area of a set of rectangles,
  only include squares in calculation
thinking abstraction:
  filter the two dim. array to choose squares, then map them into single dim. array of rectangle areas,
  then reduce this array to a single number by summing up all areas
*/

function totalArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  let areas = squares.map(square => square[0] * square[1]);
  return areas.reduce((sum, area) => sum + area);
}


let myRectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(myRectangles));