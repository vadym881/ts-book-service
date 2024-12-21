import { Author } from "../models/author";
import { Book } from "../models/book";

export interface IBookService {
  getBooks(): Book[];
  getBookById(id: number): Book;
  getAuthors(): Author[];
  getAuthorById(id: number): Author;
  getBooksByAuthor(author: Author): Book[];
  getAuthorByBookId(bookId: number): Author;
  search(searchTerm: string, searchType: SearchType): Book[];
}

export type GenreType = "Fantasy" | "Fiction" | "Adventure";

export type SearchType = "title" | "genre" | "year" | "author";