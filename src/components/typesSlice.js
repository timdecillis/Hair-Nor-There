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
      console.log(action.payload)
      // const { type } = action.payload

      // if (!state.types.contains(type)) {
      //   console.log('adding new type')
      //   state.types.push(type)
      //   return
      // }
      // console.log('type already exists')
      // return
    }
  }
})

export default typesSlice.reducer

export const { typeAdded } = typesSlice.actions

export const getTypes = state => state.types