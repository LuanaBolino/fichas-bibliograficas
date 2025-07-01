import Database from "../db/Database";
import Ebook from "../model/Ebook";
import MainScreen from "../view/MainScreen";
import PrintedBook from "../model/PrintedBook";

export default class MainController{
    public db: Database = new Database();

    constructor(){
        new MainScreen(this);
    }

public getNewPrintedBook(): PrintedBook { 
    return new PrintedBook();
  }

    public getNewEbook(): Ebook{
        return new Ebook();
    }
}