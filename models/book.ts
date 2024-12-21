import { GenreType } from "../types/types";
import { Author } from "./author";

export class Book {
  static nextId = 1;
  title: string;
  id: number;
  author: Author;
  genre: GenreType;
  year: number;

  constructor(title: string, author: Author, genre: GenreType, year: number) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;
    this.id = Book.nextId++;
  }
}
