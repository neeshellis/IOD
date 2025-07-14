const book = {
  title: "Watership Down",
  description: "A novel about a group of rabbits!",
  author: "Fred Brown",
  pages: 550,
};

console.log(book.title);
console.log(book.description);
console.log(book.author);
console.log(book.pages);

console.log(book);

book.description = "A novel about elephants!";

console.log(book);

book.age = 2001;

console.log(book);
