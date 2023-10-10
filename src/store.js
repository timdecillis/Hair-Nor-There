import { configureStore } from "@reduxjs/toolkit";

import typesReducer from './components/typesSlice'

export default configureStore({
  reducer: {
    types: typesReducer
  }
})