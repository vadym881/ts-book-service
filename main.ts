import { Author } from "./models/author";
import { Book } from "./models/book";
import { Library } from "./models/library";

const author1 = new Author("Jules", "Verne");
// console.log(author1);
const book1 = new Book(
  "The children of captain Grant",
  author1,
  "Adventure",
  1867
);
// console.log(book1);'
const book2 = new Book("The mysterious island", author1, "Adventure", 1875);
const book3 = new Book(
  "Twenty Thousand Leagues under the Sea",
  author1,
  "Fiction",
  1870
);

const author2 = new Author("Christopher", "Paolini");
// console.log(author2);
const book4 = new Book("Eragon", author2, "Fantasy", 2002);
// console.log(book2);

const author3 = new Author("Joane", "Rowling");
// console.log(author3);
const book5 = new Book("Harry Potter", author3, "Fiction", 1997);
// console.log(book3);

const books = [book1, book2, book3, book4, book5];
const library = new Library(books);
// console.log(library.getBooks());
// console.log(library.getBookById(2))
// console.log(library.getAuthors())
// console.log(library.getAuthorById(1))
// console.log(library.getBooksByAuthor(author1))
// console.log(library.getAuthorByBookId(5))
console.log(library.search('Rowling', 'author'))