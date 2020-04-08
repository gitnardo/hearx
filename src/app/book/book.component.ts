import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksQuery } from '../books/state/books.query';
import { BooksService } from '../books/state/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book$ = this.booksQuery.selectEntity(this.bookId);
  constructor(
    private activatedRoute: ActivatedRoute,
    private booksService: BooksService,
    private booksQuery: BooksQuery
  ) { }

  ngOnInit() {
    if (this.booksQuery.hasEntity(this.bookId) === false) {
      this.booksService.getBook(this.bookId);
    }
  }

  get bookId() {
    return this.activatedRoute.snapshot.params.id;
  }
}
