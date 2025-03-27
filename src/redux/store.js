import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import campersReducer from './campers/slice.js';
import filterReducer from './filters/slice.js';
import favoriteReducer from './favorites/slice.js';


const persistConfig = {
   key: 'favorites',
   storage,
   
 };

const persistedReducer = persistReducer(persistConfig, favoriteReducer);


export const store= configureStore({
   reducer:{
      campers:campersReducer,
      filters:filterReducer,
      favorites:persistedReducer
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})

export const persistor = persistStore(store);