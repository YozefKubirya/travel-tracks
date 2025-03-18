import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import campersReducer from './campers/slice.js';
import filterReducer from './filters/slice.js'

const persistConfig = {
   key: 'root',
   storage,
 };

const persistedReducer = persistReducer(persistConfig, campersReducer);


export const store= configureStore({
   reducer:{
      campers:persistedReducer,
      filters:filterReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})

export const persistor = persistStore(store);