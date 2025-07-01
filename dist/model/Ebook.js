"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = __importDefault(require("./Book"));
class Ebook extends Book_1.default {
    // File Size ---------------------------------------
    setFileSize(fileSize) {
        this.fileSize = fileSize;
    }
    getFileSize() {
        return this.fileSize;
    }
    // Format -----------------------------------------
    setFormat(format) {
        this.format = format;
    }
    getFormat() {
        return this.format;
    }
    //	Bibliographic record----------------------------
    bibliographicRecord() {
        let card = this.baseBibliographicRecord();
        card += `\nTamanho do Ebook: ${this.fileSize};\nTipo do Arquivo: ${this.format};`;
        return card;
    }
}
exports.default = Ebook;
