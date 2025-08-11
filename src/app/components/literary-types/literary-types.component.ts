import { Component, input } from '@angular/core';
import { BookComponent } from "../book/book.component";
import { literaryTypes } from '../book/book-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-literary-types',
  imports: [BookComponent, CommonModule],
  templateUrl: './literary-types.component.html',
  styleUrl: './literary-types.component.css'
})
export class LiteraryTypesComponent {

  types = input.required<literaryTypes>();
}
