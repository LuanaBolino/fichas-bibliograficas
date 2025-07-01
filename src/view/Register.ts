import PromptSync from 'prompt-sync';
import MainController from "../controller/MainController";
import Ebook from "../model/Ebook";
import PrintedBook from '../model/PrintedBook';
import { ReadingStatus } from '../model/ReadingStatus';

export default class Register {
  private prompt = PromptSync();
  private control: MainController;

  public constructor(control: MainController) {
    this.control = control;
  }

  public addBook() {
    let book: PrintedBook = this.control.getNewPrintedBook();

    let title: string = this.prompt("\nDigite o título do livro:");
    let author: string = this.prompt("\nDigite o nome do autor:");

    let year = this.readNumber("\nDigite o ano do lançamento do livro:", 0);
    let edition = this.readNumber("\nDigite a edição:", 1);

    console.log("\nEscolha o status do livro:\n1. Lido\n2. Em andamento\n3. Ler futuramente");
    let statusChoice: number = this.readNumber("Opção: ", 1); // usar readNumber aqui também é legal

    let status: ReadingStatus;
    switch (statusChoice) {
      case 1:
        status = ReadingStatus.Read;
        break;
      case 2:
        status = ReadingStatus.InProgress;
        break;
      case 3:
        status = ReadingStatus.ToRead;
        break;
      default:
        console.log("Opção inválida! Usando status 'Ler futuramente'.");
        status = ReadingStatus.ToRead;
        break;
    }

    book.setTitle(title);
    book.setAuthor(author);
    book.setYear(year);
    book.setEdition(edition);
    book.setStatus(status);

    this.control.db.addBook(book);
  }

  public addEbook() {
    let ebook: Ebook = this.control.getNewEbook();

    let title: string = this.prompt("\nDigite o título do livro:");
    let author: string = this.prompt("\nDigite o nome do autor:");
    let year = this.readNumber("\nDigite o ano do lançamento do ebook:", 0);
    let edition = this.readNumber("\nDigite a edição:", 1);
    let format: string = this.prompt("\nTipo do Ebook:");
    let size = this.readNumber("\nDigite o tamanho do arquivo em MB:", 1);

    console.log("\nEscolha o status do ebook:\n1. Lido\n2. Em andamento\n3. Ler futuramente");
    let statusChoice: number = this.readNumber("Opção: ", 1);

    let status: ReadingStatus;
    switch (statusChoice) {
      case 1:
        status = ReadingStatus.Read;
        break;
      case 2:
        status = ReadingStatus.InProgress;
        break;
      case 3:
        status = ReadingStatus.ToRead;
        break;
      default:
        console.log("Opção inválida! Usando status 'Ler futuramente'.");
        status = ReadingStatus.ToRead;
        break;
    }

    ebook.setTitle(title);
    ebook.setAuthor(author);
    ebook.setYear(year);
    ebook.setEdition(edition);
    ebook.setFormat(format);
    ebook.setFileSize(size);
    ebook.setStatus(status);

    this.control.db.addBook(ebook);
  }

  private readNumber(promptMsg: string, min: number = 0): number {
    while (true) {
      try {
        let value = parseInt(this.prompt(promptMsg));
        if (isNaN(value) || value < min) {
          throw new Error("Número inválido! Digite um número válido.");
        }
        return value;
      } catch (error: any) {
        console.log(error.message);
      }
    }
  }
}
