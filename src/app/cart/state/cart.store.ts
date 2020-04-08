import { Injectable } from '@angular/core';
import {CartItem, createCartItem} from '../state/cart.model';
import {EntityState, EntityStore, StoreConfig, transaction} from '@datorama/akita';

export interface CartState extends EntityState<CartItem> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'cart',
  cache: {
    ttl: 3600000
  } })

export class CartStore extends EntityStore<CartState> {

  constructor() {
    super();
  }


  @transaction()
  addNewItem() {
    const newitem = createCartItem();
    this.add(newitem);
    this.setActive(newitem.id);
  }
}

