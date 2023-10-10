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
        state.types.push(type)
        return
      },
    typeChosen(state, action) {
      const { type } = action.payload
      state.userType = type
    }
  }
})

export default typesSlice.reducer

export const { typeAdded, typeChosen } = typesSlice.actions

export const getTypes = state => state.types