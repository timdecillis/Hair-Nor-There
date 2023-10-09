import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  types: ['normal', 'dry', 'oily']
}

const typesSlice = createSlice({
  name: 'types',
  initialState,
  reducers: {
  }
})

export default typesSlice.reducer

export const getTypes = state => state.types
