// Using dot notation to access property values

var book;

book = {
  title     : "The Hobbit",
  author    : "J. R. R. Tolkien",
  published : 1937
};

console.log(book.title);    // Logs the title property of the book object
console.log(book.author);   // Logs the author property of the book object

// Further Adventures
// 1) Log the published property to the console.
console.log(book.published);    // Logs the published property of the book object

// 2) Add a second book.
var secondBook = {
  title     : "Harry Potter and the Philosopher's Stone",
  author    : "J.K. Rowling",
  published : 1997
};

// 3) Log its details to the console.
console.log(secondBook.title);     // Logs the title of the second book
console.log(secondBook.author);    // Logs the author of the second book
console.log(secondBook.published); // Logs the published year of the second book


/* Further Adventures
 *
 * 1) Log the published property to the console.
 *
 * 2) Add a second book.
 *
 * 3) Log its details to the console.
 *
 * 4) In the console tab, at the prompt,
 *    type in book.title and press Enter.
 *    Once the program is run, object properties
 *    are available interactively via the console.
 *
 */