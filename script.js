//  Part 1: For Loops

// Problem 1: Count to 10

for (let i = 0; i < 10; i++) {
  console.log("count to", i + 1);
}

// Problem 2: Even Numbers

for (let i = 0; i < 21; i += 2) {
  console.log(i);
}

// Problem 3: Loop through an Array

let animals = ["dog", "cat", "rabbit", "parrot"];
console.log;
for (let i = 0; i < animals.length; i++) {
  console.log("I like", animals[i]);
}

// Problem 4: Reverse Array Output

console.log("colors in reverse");
let colors = ["red", "green", "blue", "yellow"];
let tempList = [];
console.log(colors);
for (let i = colors.length - 1; i >= 0; i--) {
  let newCol = colors.pop(colors[i]);
  tempList.push(newCol);
}
colors = tempList;
console.log(colors);

// Part 2: Objects

// Problem 5: Simple Object

const person = {
  name: "Debbie",
  age: "50",
  favColor: "red",
};

// Problem 6: Modify an Object

console.log(
  "My name is " +
    person.name +
    " and I am " +
    person.age +
    " years old. My favorite color is " +
    person.favColor +
    "."
);
person.hobby = "talking with friends";
console.log("One of my hobbies is " + person.hobby + ".");

// Problem 7: Array of Objects

const books = [
  (bookOne = {
    title: "tuesdays with Morrie",
    author: "Mitch Albom",
    pages: 192,
    isFavorite: false,
  }),
  (bookTwo = {
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    pages: 138,
    isFavorite: false,
  }),
  (bookThree = {
    title: "Who Moved My Cheese",
    author: "Spencer Johnson, M. D.",
    pages: 96,
    isFavorite: true,
  }),
];

for (i = 0; i < books.length; i++) {
  currentBook = books[i];
  console.log(
    currentBook.title +
      " by " +
      currentBook.author +
      " - " +
      currentBook.pages +
      " pages."
  );
}

// Problem 8: Favorite Book Finder

for (i = 0; i < books.length; i++) {
  if (books[i].isFavorite == true) {
    console.log(books[i].title + " is my favorite book.");
  }
}

// Bonus

function describePerson(obj) {
  console.log(
    obj.name +
      " is " +
      obj.age +
      " years old and " +
      obj.favColor +
      " is their favorite color."
  );
}

describePerson(person);
