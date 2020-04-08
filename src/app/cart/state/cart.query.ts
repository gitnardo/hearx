import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CartStore, CartState } from './cart.store';
import { BooksQuery } from '../../books/state/books.query';
import {combineLatest} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class CartQuery extends QueryEntity<CartState> {


  constructor(
    protected store: CartStore,
    protected booksquery:BooksQuery

  ) {
    super(store);
  }

}
