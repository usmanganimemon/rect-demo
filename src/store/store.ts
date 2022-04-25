import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import TestSlice from './slices/testSlice'
// import {composeWithDevTools} from "redux-devtools-extension";
// const thunkMiddleware = applyMiddleware(thunk)
const store = configureStore({
  reducer: {
    test: TestSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk)
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store