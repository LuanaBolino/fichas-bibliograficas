"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const ReadingStatus_1 = require("../model/ReadingStatus");
class Register {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
    }
    addBook() {
        let book = this.control.getNewPrintedBook();
        let title = this.prompt("\nDigite o título do livro:");
        let author = this.prompt("\nDigite o nome do autor:");
        let year = this.readNumber("\nDigite o ano do lançamento do livro:", 0);
        let edition = this.readNumber("\nDigite a edição:", 1);
        console.log("\nEscolha o status do livro:\n1. Lido\n2. Em andamento\n3. Ler futuramente");
        let statusChoice = this.readNumber("Opção: ", 1); // usar readNumber aqui também é legal
        let status;
        switch (statusChoice) {
            case 1:
                status = ReadingStatus_1.ReadingStatus.Read;
                break;
            case 2:
                status = ReadingStatus_1.ReadingStatus.InProgress;
                break;
            case 3:
                status = ReadingStatus_1.ReadingStatus.ToRead;
                break;
            default:
                console.log("Opção inválida! Usando status 'Ler futuramente'.");
                status = ReadingStatus_1.ReadingStatus.ToRead;
                break;
        }
        book.setTitle(title);
        book.setAuthor(author);
        book.setYear(year);
        book.setEdition(edition);
        book.setStatus(status);
        this.control.db.addBook(book);
    }
    addEbook() {
        let ebook = this.control.getNewEbook();
        let title = this.prompt("\nDigite o título do livro:");
        let author = this.prompt("\nDigite o nome do autor:");
        let year = this.readNumber("\nDigite o ano do lançamento do ebook:", 0);
        let edition = this.readNumber("\nDigite a edição:", 1);
        let format = this.prompt("\nTipo do Ebook:");
        let size = this.readNumber("\nDigite o tamanho do arquivo em MB:", 1);
        console.log("\nEscolha o status do ebook:\n1. Lido\n2. Em andamento\n3. Ler futuramente");
        let statusChoice = this.readNumber("Opção: ", 1);
        let status;
        switch (statusChoice) {
            case 1:
                status = ReadingStatus_1.ReadingStatus.Read;
                break;
            case 2:
                status = ReadingStatus_1.ReadingStatus.InProgress;
                break;
            case 3:
                status = ReadingStatus_1.ReadingStatus.ToRead;
                break;
            default:
                console.log("Opção inválida! Usando status 'Ler futuramente'.");
                status = ReadingStatus_1.ReadingStatus.ToRead;
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
    readNumber(promptMsg, min = 0) {
        while (true) {
            try {
                let value = parseInt(this.prompt(promptMsg));
                if (isNaN(value) || value < min) {
                    throw new Error("Número inválido! Digite um número válido.");
                }
                return value;
            }
            catch (error) {
                console.log(error.message);
            }
        }
    }
}
exports.default = Register;
