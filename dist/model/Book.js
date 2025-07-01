"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    // Title--------------------------------------------
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    // Author---------------------------------------------
    getAuthor() {
        return this.author;
    }
    setAuthor(author) {
        this.author = author;
    }
    // Year--------------------------------------------
    getYear() {
        return this.year;
    }
    setYear(year) {
        this.year = year;
    }
    // Edition------------------------------------------
    getEdition() {
        return this.edition;
    }
    setEdition(edition) {
        this.edition = edition;
    }
    // Status-------------------------------------------
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    //	Bibliographic record----------------------------
    baseBibliographicRecord() {
        return `Título: ${this.title};\nAutor: ${this.author};\nAno: ${this.year};\nEdição: ${this.edition};\nStatus: ${this.status}`;
    }
}
exports.default = Book;
