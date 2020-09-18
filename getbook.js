function myMap(array, func) {
  let newArr = [];
  
  for (let idx = 0; idx < array.length; idx += 1) {
    newArr.push(func(array[idx], idx, array));
  }

  return newArr;
}

function getTitle(book) {
  return book.title;
}

function getBooksTitle(books) {
  return myMap(books, getTitle);
}

let books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

console.log(getBooksTitle(books));