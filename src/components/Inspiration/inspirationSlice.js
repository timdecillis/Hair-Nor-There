import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inspirations: ['Lady Gaga', 'Dolly Parton', 'Madonna'],
  userInspiration: 'undecided'
}

const inspirationSlice = createSlice({
  name: 'inspiration',
  initialState,
  reducers: {
    inspirationAdded(state, action) {
      const { inspiration } = action.payload
        state.inspirations.push(inspiration)
        return
      },
    inspirationChosen(state, action) {
      const { inspiration } = action.payload
      state.userInspiration = inspiration
    }
  }
})

export default inspirationSlice.reducer

export const { inspirationAdded, inspirationChosen } = inspirationSlice.actions

export const getInspirations = state => {
  return state.inspirations}