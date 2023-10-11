import { configureStore } from "@reduxjs/toolkit";

import typesReducer from './components/HairType/typesSlice'
import inspirationReducer from './components/Inspiration/inspirationSlice'
import suggestionReducer from './components/Suggestion/suggestionSlice'

export default configureStore({
  reducer: {
    types: typesReducer,
    inspirations: inspirationReducer,
    suggestion: suggestionReducer
  }
})