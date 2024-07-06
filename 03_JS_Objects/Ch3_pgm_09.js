// Concatenating string properties

var book1;
var book2;

book1 = {
	title: "The Hobbit",
	author: "J. R. R. Tolkien"
};

book2 = {
	title: "Northern Lights",
	author: "Philip Pullman"
};

console.log(book1.title + " by " + book1.author); // Logs details of book1
console.log(book2.title + " by " + book2.author); // Logs details of book2

// Further Adventures
// 1) Add a third book.
var book3 = {
	title: "To Kill a Mockingbird",
	author: "Harper Lee"
};

// 2) Log its details to the console.
console.log(book3.title + " by " + book3.author); // Logs details of book3

// 3) Add a third property to book3.
book3.year = 1960;

// 4) Update the messages logged to include the new property.
console.log(book1.title + " by " + book1.author + ", published in " + book1.year);
console.log(book2.title + " by " + book2.author + ", published in " + book2.year);
console.log(book3.title + " by " + book3.author + ", published in " + book3.year);



/* Further Adventures
 *
 * 1) Add a third book.
 *
 * 2) Log its details to the console.
 *
 * 3) Add a third property.
 *
 * 4) Update the messages logged to include the
 *    new property.
 *
 */