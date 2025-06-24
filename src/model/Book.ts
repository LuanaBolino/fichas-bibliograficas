export default class Book{
    private title!: string;
    private author!: string;
    private year!: number;
    private edition!: number;

    // Title--------------------------------------------
    public getTitle(): string{
        return this.title;
    }

    public setTitle(title: string): void{
        this.title = title;
    }

    // Author---------------------------------------------
    public getAuthor(): string{
        return this.author;
    }

    public setAuthor(author: string): void{
        this.author = author;
    }

    // Year--------------------------------------------
    public getYear(): number{
        return this.year;
    }

    public setYear(year: number){
        this.year = year;
    }

    // Edition------------------------------------------
    public getEdition(): number{
        return this.edition;
    }

    public setEdition(edition: number): void{
        this.edition = edition;
    }

    //	Bibliographic record----------------------------

    public bibliographicRecord(): string{
        let card: string = "";
        card = `Título: ${this.title};\nAutor: ${this.author};\nAno: ${this.year};\nEdição: ${this.edition};`
        return card;
    }
}