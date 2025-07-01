import Book from "./Book";

export default class Ebook extends Book {
    private fileSize!: number;
    private format!: string;

    // File Size ---------------------------------------
    setFileSize(fileSize: number): void{
        this.fileSize = fileSize;
    }

    getFileSize(): number{
        return this.fileSize;
    }

    // Format -----------------------------------------
    setFormat(format: string): void{
        this.format = format;
    }

    getFormat(): string{
        return this.format;
    }

    //	Bibliographic record----------------------------
    public bibliographicRecord(): string {
  let card = this.baseBibliographicRecord();
  card += `\nTamanho do Ebook: ${this.fileSize};\nTipo do Arquivo: ${this.format};`;
  return card;
}

}