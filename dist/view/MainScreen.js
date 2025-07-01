"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Register_1 = __importDefault(require("./Register"));
class MainScreen {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
        this.register = new Register_1.default(control);
        this.mainMenu();
    }
    mainMenu() {
        let continues = true;
        while (continues) {
            let choice = parseInt(this.prompt("Escolha:\n1. Registrar livro físico;\n2. registrar ebook;\n3. Listar livros físicos;\n4. Listar ebooks; \n5. Listar livros físicos e ebooks; \n6. Sair."));
            switch (choice) {
                case 1:
                    this.register.addBook();
                    break;
                case 2:
                    this.register.addEbook();
                    break;
                case 3:
                    console.log(this.control.db.listOnlyPrintedBooks());
                    break;
                case 4:
                    console.log(this.control.db.listOnlyEbooks());
                    break;
                case 5:
                    console.log(this.control.db.listAllBooks());
                    break;
                case 6:
                    continues = false;
                    break;
                default:
                    console.log("digite um numero válido");
                    break;
            }
        }
        console.log("SAIU");
    }
}
exports.default = MainScreen;
