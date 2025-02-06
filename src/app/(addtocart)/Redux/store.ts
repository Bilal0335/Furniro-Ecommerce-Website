"use client"
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  ProductSlice  from './features/productSlice'
import  CartSlice  from './features/cartSlice'

import storage  from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/lib/persistReducer';

const persistconfiq = {
  key:"root",
  version:1,
  storage,
}

const reducer = combineReducers({
  product:ProductSlice,
  cart:CartSlice
})

const persistedReducer = persistReducer(persistconfiq,reducer)


export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false}),
 
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch