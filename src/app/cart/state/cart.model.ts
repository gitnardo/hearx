import { persistState } from '@datorama/akita';
import { ID } from '@datorama/akita';
import { Book } from '../../books/state/book.model';
let id = 1;

export interface CartItem {
  productId: Book['id'];
  id: number;
  quantity: number;
  total: number;
}

export function createCartItem() {
  return {
  id: id++,
  total: 0,
  quantity: 1
  } as CartItem;
}

