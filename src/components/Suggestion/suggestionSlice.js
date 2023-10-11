import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from 'react-redux'

import { getInspirations } from '../Inspiration/inspirationSlice'

const initialState = {
  suggestion: null
}

const suggestionSlice = createSlice({
  name: 'suggestion',
  initialState,
  reducers: {
    createSuggestion(state, action) {
      const { suggestion } = action.payload
      state.suggestion = suggestion
    }
  }
})

export default suggestionSlice.reducer

export const { inspirationAdded, inspirationChosen } = suggestionSlice.actions

export const getSuggestion = state => state.suggestion