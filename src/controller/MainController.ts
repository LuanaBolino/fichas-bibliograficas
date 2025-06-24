import Database from "../db/Database";
import Book from "../model/Book";
import Ebook from "../model/Ebook";
import MainScreen from "../view/MainScreen";

export default class MainController{
    public db: Database = new Database();

    constructor(){
        new MainScreen(this);
    }

    public getNewBook(): Book{
        return new Book();
    }

    public getNewEbook(): Ebook{
        return new Ebook();
    }
}