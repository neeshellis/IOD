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

const bookarray = [
  {
    title: "Watership Down",
    description: "A novel about a group of rabbits!",
    author: "Fred Brown",
    pages: 550,
  },
  {
    title: "Titanic Down",
    description: "A novel about Iceburgs!",
    author: "Jane Brown",
    pages: 551,
  },
  {
    title: "The Spy who loves me",
    description: "A novel about spys!",
    author: "John Brown",
    pages: 540,
  },
  {
    title: "Cats",
    description: "A novel about cats!",
    author: "T S Elliot",
    pages: 520,
  },
  {
    title: "Watership Down",
    description: "A novel about a group of rabbits!",
    author: "Roger Brown",
    pages: 500,
  },
];

console.log(bookarray);
