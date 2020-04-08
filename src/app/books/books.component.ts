import { BooksService } from '../books/state/books.service';
import { Book } from '../books/state/book.model';
import { BooksQuery } from '../books/state/books.query';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { switchMap, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'book-selection',
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {
  books$: Observable<Book[]>;
  selectLoading$: Observable<boolean>;
  sortControl = new FormControl('name');

  constructor(
    private booksQuery: BooksQuery,
    private booksService: BooksService

  ) {}

  ngOnInit() {

    this.books$ = this.sortControl.valueChanges.pipe(
      startWith<keyof Book>('name'),
      switchMap(sortBy => {
        return this.booksQuery.selectAll({ sortBy });
      })
    );
    this.selectLoading$ = this.booksQuery.selectLoading();
    this.getBooks();
  }

  getBooks() {
    // if (this.booksQuery.pristine) {
      this.booksService.getBooks();
   // }
  }
}
