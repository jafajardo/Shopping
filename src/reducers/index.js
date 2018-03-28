import { combineReducers } from 'redux';
import ShoppingSearchedInventoryReducer from '../reducers/reducer_shopping_searched_inventory';
import ShoppingItemReducer from '../reducers/reducer_shopping_item';

export default combineReducers({
  shoppingSearchedInventory: ShoppingSearchedInventoryReducer,
  shoppingItem: ShoppingItemReducer
});