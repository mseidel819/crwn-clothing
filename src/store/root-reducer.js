import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer.ts";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

// if youre getting an error with redux, check that youve added 'return' to the functions that need it. Or remove brackets. You ass....thats the bug EVERY time.
