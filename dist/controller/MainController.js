"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../db/Database"));
const Ebook_1 = __importDefault(require("../model/Ebook"));
const MainScreen_1 = __importDefault(require("../view/MainScreen"));
const PrintedBook_1 = __importDefault(require("../model/PrintedBook"));
class MainController {
    constructor() {
        this.db = new Database_1.default();
        new MainScreen_1.default(this);
    }
    getNewPrintedBook() {
        return new PrintedBook_1.default();
    }
    getNewEbook() {
        return new Ebook_1.default();
    }
}
exports.default = MainController;
