import PrintedBook from "../model/PrintedBook";
import Ebook from "../model/Ebook";
import IBook from "../model/IBook";

export default class Database {
  private books: IBook[] = [];

  public addBook(book: IBook): void {
    this.books.push(book);
  }

  public listAllBooks(): string {
    let s: string = "";
    let n: number = 1;
    for (let i = 0; i < this.books.length; i++) {
      s += `Livro ${n}:\n${this.books[i].bibliographicRecord()}\n\n`;
      n++;
    }
    return s;
  }

  public listOnlyEbooks(): string {
  let s = "";
  let n = 1;
  for (let book of this.books) {
    if (book instanceof Ebook) {
      s += `Ebook ${n}:\n${book.bibliographicRecord()}\n\n`;
      n++;
    }
  }
  return s;
}


public listOnlyPrintedBooks(): string {
  let s = "";
  let n = 1;
  for (let book of this.books) {
    if (book instanceof PrintedBook) {
      s += `Livro ${n}:\n${book.bibliographicRecord()}\n\n`;
      n++;
    }
  }
  return s;
}

}
