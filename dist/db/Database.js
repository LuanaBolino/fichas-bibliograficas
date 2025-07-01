"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrintedBook_1 = __importDefault(require("../model/PrintedBook"));
const Ebook_1 = __importDefault(require("../model/Ebook"));
class Database {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    listAllBooks() {
        let s = "";
        let n = 1;
        for (let i = 0; i < this.books.length; i++) {
            s += `Livro ${n}:\n${this.books[i].bibliographicRecord()}\n\n`;
            n++;
        }
        return s;
    }
    listOnlyEbooks() {
        let s = "";
        let n = 1;
        for (let book of this.books) {
            if (book instanceof Ebook_1.default) {
                s += `Ebook ${n}:\n${book.bibliographicRecord()}\n\n`;
                n++;
            }
        }
        return s;
    }
    listOnlyPrintedBooks() {
        let s = "";
        let n = 1;
        for (let book of this.books) {
            if (book instanceof PrintedBook_1.default) {
                s += `Livro ${n}:\n${book.bibliographicRecord()}\n\n`;
                n++;
            }
        }
        return s;
    }
}
exports.default = Database;
