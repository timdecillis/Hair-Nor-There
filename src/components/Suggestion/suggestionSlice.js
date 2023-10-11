import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  suggestion: null
}

const suggestionSlice = createSlice({
  name: 'suggestion',
  initialState,
  reducers: {
    createSuggestion(state, action) {
      console.log('payload:', action.payload)
      const { suggestion } = action.payload
      console.log('suggestion:', suggestion)
      state.suggestion = suggestion
    }
  }
})

export default suggestionSlice.reducer

export const { createSuggestion } = suggestionSlice.actions

export const getSuggestion = state => state.suggestion