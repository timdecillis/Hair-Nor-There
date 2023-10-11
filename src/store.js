import { configureStore } from "@reduxjs/toolkit";

import typesReducer from './components/HairType/typesSlice'
import inspirationReducer from './components/Inspiration/inspirationSlice'

export default configureStore({
  reducer: {
    types: typesReducer,
    inspirations: inspirationReducer
  }
})