import { Book, literaryTypes } from './../book/book-interface';
import { Component, OnInit } from '@angular/core';
import { books } from '../../mock-book/mock-book';
import { LiteraryTypesComponent } from "../literary-types/literary-types.component";

@Component({
  selector: 'app-book-list',
  imports: [LiteraryTypesComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  literaryTypes: literaryTypes[] = [];
  booksByGenre: Map<string, Book[]> = new Map();

    ngOnInit(): void {
    this.booksByGenre = new Map();

    books.forEach((book) => {
      const genreId = book.genero.id;

      if(!this.booksByGenre.has(genreId)) {
        this.booksByGenre.set(genreId, []);
      }

      //operador de encadeamento opcional ou operador de navegação segura "?".
      this.booksByGenre.get(genreId)?.push(book);
    });

    this.literaryTypes = [
      {
        id: "programacao",
        value: "Programação",
        livros: this.booksByGenre.get("programacao") || []
      },
      {
        id: "ficcao",
        value: "Ficção",
        livros: this.booksByGenre.get("ficcao") || []
      },
      {
        id: "ciencia",
        value: "Ciência",
        livros: this.booksByGenre.get("ciencia") || []
      }
    ]

    console.log(this.literaryTypes);
  }
}
