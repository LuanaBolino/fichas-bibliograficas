import promptSync from 'prompt-sync';
import Database from '../db/Database';
import MainController from '../controller/MainController';
import Register from './Register';


export default class MainScreen{
    private prompt = promptSync();
    private control: MainController;
    private register: Register;

    constructor(control:MainController){
        this.control = control;
        this.register = new Register(control);
        this.mainMenu();
    }

    public mainMenu(): void {
        let continues: boolean = true;
        while (continues) {
            let choice = parseInt(this.prompt("Escolha:\n1. Registrar livro físico;\n2. registrar ebook;\n3. Listar livros físicos;\n4. Listar ebooks; \n5. Listar livros físicos e ebooks; \n6. Sair." ));
            switch (choice) {
                case 1:
                    this.register.addBook();
                    break;
                case 2:
                    this.register.addEbook();
                    break;
                case 3:
                    console.log(this.control.db.listAllBooks());
                    break;
                case 4:
                    console.log(this.control.db.listAllEbooks());
                    break;
                case 5:
                    console.log(this.control.db.listAll());
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