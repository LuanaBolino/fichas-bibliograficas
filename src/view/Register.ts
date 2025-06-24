import PromptSync from 'prompt-sync';
import Database from "../db/Database";
import MainController from "../controller/MainController";
import Book from "../model/Book";
import Ebook from "../model/Ebook";

export default class Register{
    private prompt = PromptSync();
    private control: MainController;

    public constructor(control: MainController) {
        this.control = control;
    }

    public addBook(){
        let book: Book = this.control.getNewBook();
        let title: string = this.prompt("\nDigite o título do livro:");
        let author: string = this.prompt("\nDigite o nome do autor:");
        let year: number = parseInt(this.prompt("\nDigite o ano do lançamento do livro:"));
        let edition: number = parseInt(this.prompt("\nDigite a edição:"));

        book.setTitle(title);
        book.setAuthor(author);
        book.setYear(year);
        book.setEdition(edition);

        this.control.db.addBook(book);

    }

    public addEbook(){
        let ebook: Ebook = this.control.getNewEbook();
        let title: string = this.prompt("\nDigite o título do livro:");
        let author: string = this.prompt("\nDigite o nome do autor:");
        let year: number = parseInt(this.prompt("\nDigite o ano do lançamento do livro:"));
        let edition: number = parseInt(this.prompt("\nDigite a edição:"));
        let format: string = this.prompt("\nTipo do Ebook:");
        let size: number = parseInt(this.prompt("\nDigite o tamanho do arquivo"));

        ebook.setTitle(title);
        ebook.setAuthor(author);
        ebook.setYear(year);
        ebook.setEdition(edition);
        ebook.setFormat(format);
        ebook.setFileSize(size);

        this.control.db.addEbook(ebook);

    }
}