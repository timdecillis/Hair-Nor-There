import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

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
        console.log('adding new type')
        state.types.push(type)
        return
      }
  }
})

export default typesSlice.reducer

export const { typeAdded } = typesSlice.actions

export const getTypes = state => state.types