import { Injectable } from '@angular/core';
import { CartStore, CartState } from './cart.store';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { CartQuery } from './cart.query';
import { Book } from '../../books/state/book.model';


@Injectable({ providedIn: 'root' })
export class CartService extends NgEntityService<CartState> {

  constructor(
    protected cartStore: CartStore,
    protected cartQuery: CartQuery) {
    super(cartStore);
  }

  newItem(){
    this.cartStore.addNewItem();
  }

  addToCart(bookid: Book['id']) {
    const getItem = this.cartQuery.getEntity(bookid);
  }

}
