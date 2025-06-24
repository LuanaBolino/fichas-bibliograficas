import Book from "../model/Book";
import Ebook from "../model/Ebook";

export default class Database{
    private books: Book[] = [];
    private ebooks: Ebook[] = [];

    public addBook(book: Book): void{
        this.books.push(book);
    }

    public addEbook(ebook: Ebook): void{
        this.ebooks.push(ebook);
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

    public listAllEbooks(): string {
        let s: string = "";
        let n: number = 1;
        for (let i = 0; i < this.ebooks.length; i++) {
            s += `Ebook ${n}:\n${this.ebooks[i].bibliographicRecord()}\n\n`;
            n++;
        }
        return s;
    }

    public listAll(): string {
        let s: string = "";
        let n = 1;
    
        for (let i = 0; i < this.books.length; i++) {
            s += `(Livro) ${n}:\n${this.books[i].bibliographicRecord()}\n\n`;
            n++;
        }
    
        for (let i = 0; i < this.ebooks.length; i++) {
            s += `(Ebook) ${n}:\n${this.ebooks[i].bibliographicRecord()}\n\n`;
            n++;
        }
    
        return s;
    }
    

}