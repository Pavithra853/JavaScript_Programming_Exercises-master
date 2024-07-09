// Displaying an object's properties on the console

var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

// Define an object for a blog post
var blogPost = {
  title: "Top 10 JavaScript Frameworks in 2024",
  author: "Jane Doe",
  publishDate: "July 1, 2024",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
  comments: [
      { user: "John Smith", comment: "Great insights!" },
      { user: "Emily Johnson", comment: "I disagree with point 5." }
  ]
};

// Display information about the blog post
console.log("\nBlog Post: " + blogPost.title);
console.log("------------------------------");
console.log("Author: " + blogPost.author);
console.log("Published on: " + blogPost.publishDate);
console.log("------------------------------");
console.log("Content: " + blogPost.content);
console.log("------------------------------");

// Display comments on the blog post
console.log("Comments:");
blogPost.comments.forEach(function(comment, index) {
  console.log((index + 1) + ") " + comment.user + ": " + comment.comment);
});


/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */