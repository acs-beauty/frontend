import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import { cartReducer } from "./cart/slice";
import  categoriesReducer  from "./catalog/slice";
import  {brands}  from "./brands/slice";
import  {products}  from "./products/slice";

const cartPersistConfig = {
  key: "cart",
  storage,
};
const categoriesPersistConfig = {
  key: "categories",
  storage,
};
const brandsPersistConfig = {
  key: "brands",
  storage,
};

export const store = configureStore({
  reducer: {
    cart: persistReducer(cartPersistConfig, cartReducer),
    categories: persistReducer(categoriesPersistConfig, categoriesReducer),
    brands: persistReducer(brandsPersistConfig, brands),
    products: persistReducer(brandsPersistConfig, products)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
