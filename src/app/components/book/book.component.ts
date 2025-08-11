import { Component, input } from '@angular/core';
import { Book } from './book-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  // componente filho (BookComponent) criamos a input property baseada em signal.
  // input.required<Book>() define que o componente espera receber um objeto do tipo Book como entrada.
  library = input.required<Book>();

  toggleFavorite() {
    this.library().favorito = !this.library().favorito;
  }
}
