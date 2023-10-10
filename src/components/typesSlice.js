import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  types: ['normal', 'dry', 'oily'],
  userType: null
}

const typesSlice = createSlice({
  name: 'types',
  initialState,
  reducers: {
    typeAdded(state, action) {
      const { type } = action.payload
      if (!state.types.contains(type)) {
        state.types.push(type)
      }
    }
  }
})

export default typesSlice.reducer

export const getTypes = state => state.types
