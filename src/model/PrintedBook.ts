import Book from "./Book";

export default class PrintedBook extends Book {
  public bibliographicRecord(): string {
    return `Título: ${this.getTitle()};\nAutor: ${this.getAuthor()};\nAno: ${this.getYear()};\nEdição: ${this.getEdition()};\nStatus: ${this.getStatus()}`;
  }
}
