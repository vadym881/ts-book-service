import { IBookService, SearchType } from "../types/types";
import { Author } from "./author";
import { Book } from "./book";

export class Library implements IBookService {
  private books: Book[];

  constructor(books: Book[]) {
    this.books = books;
  }

  getBooks(): Book[] {
    return this.books;
  }

  getBookById(id: number): Book {
    const foundBook = this.books.find((a) => a.id === id);
    if (!(foundBook instanceof Book)) {
      throw new Error("Book not found");
    }
    return foundBook;
  }

  getAuthors(): Author[] {
    const authors: Author[] = [];
    for (const book of this.books) {
      authors.push(book.author);
    }
    return authors;
  }

  getAuthorById(id: number): Author {
    const authors: Author[] = this.getAuthors();
    const foundAuthor = authors.find((a) => a.id === id);
    if (!(foundAuthor instanceof Author)) {
      throw new Error("Author not found");
    }
    return foundAuthor;
  }

  getBooksByAuthor(author: Author): Book[] {
    return this.books.filter((a) => a.author === author);
  }

  getAuthorByBookId(bookId: number): Author {
    const foundBook = this.getBookById(bookId);
    return foundBook.author;
  }

  search(searchTerm: string, searchType: SearchType): Book[] {
    let searchResult: Book[];
    switch (searchType) {
      case "title":
        searchResult = this.books.filter((a) => a.title === searchTerm);
        break;
      case "genre":
        searchResult = this.books.filter((a) => a.genre === searchTerm);
        break;
      case "year":
        searchResult = this.books.filter((a) => a.year === Number(searchTerm));
        break;
      case "author":
        searchResult = this.books.filter((a) => a.author.lastName === searchTerm);
        break;
    }
    return searchResult;
  }
}
