"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = __importDefault(require("./Book"));
class PrintedBook extends Book_1.default {
    bibliographicRecord() {
        return `Título: ${this.getTitle()};\nAutor: ${this.getAuthor()};\nAno: ${this.getYear()};\nEdição: ${this.getEdition()};\nStatus: ${this.getStatus()}`;
    }
}
exports.default = PrintedBook;
