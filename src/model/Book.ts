import { ReadingStatus } from "./ReadingStatus";
import IBook from "./IBook";

export default abstract class Book implements IBook {
  private title!: string;
  private author!: string;
  private year!: number;
  private edition!: number;
  private status!: ReadingStatus;

    // Title--------------------------------------------
    public getTitle(): string{
        return this.title;
    }

    public setTitle(title: string): void{
        this.title = title;
    }

    // Author---------------------------------------------
    public getAuthor(): string{
        return this.author;
    }

    public setAuthor(author: string): void{
        this.author = author;
    }

    // Year--------------------------------------------
    public getYear(): number{
        return this.year;
    }

    public setYear(year: number){
        this.year = year;
    }

    // Edition------------------------------------------
    public getEdition(): number{
        return this.edition;
    }

    public setEdition(edition: number): void{
        this.edition = edition;
    }

    // Status-------------------------------------------
    public getStatus(): ReadingStatus {
        return this.status;
    }

    public setStatus (status: ReadingStatus): void {
        this.status = status;
    }

    //	Bibliographic record----------------------------

    public baseBibliographicRecord(): string {
  return `Título: ${this.title};\nAutor: ${this.author};\nAno: ${this.year};\nEdição: ${this.edition};\nStatus: ${this.status}`;
}

public abstract bibliographicRecord(): string;

}
