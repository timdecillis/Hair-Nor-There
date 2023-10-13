import { createSlice } from "@reduxjs/toolkit";

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

export const { createSuggestion } = suggestionSlice.actions

export const getSuggestion = state => state.suggestion

// adding comment