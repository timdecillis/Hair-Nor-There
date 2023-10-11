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
        state.types.push(inspiration)
        return
      },
    inspirationChosen(state, action) {
      const { inspiration } = action.payload
      state.userType = inspiration
    }
  }
})

export default inspirationSlice.reducer

export const { inspirationAdded, inspirationChosen } = inspirationSlice.actions

export const getInspirations = state => state.inspirations