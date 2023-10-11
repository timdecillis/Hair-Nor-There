import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import HairType from './components/HairType/HairType'
import Inspiration from './components/Inspiration/Inspiration'
import Suggestion from './components/Suggestion/Suggestion'
import { getInspirations } from './components/Inspiration/inspirationSlice'
import { getTypes } from './components/HairType/typesSlice'
import { createSuggestion } from './components/Suggestion/suggestionSlice'

const App = () => {
  const { userType } = useSelector(getTypes)
  const type = userType
  const { userInspiration } = useSelector(getInspirations)
  const inspiration = userInspiration
  const dispatch = useDispatch()


  const generate = () => {
    if (type && inspiration) {
      dispatch(createSuggestion({suggestion: 'short bob'}))
    }
  }

  return (
    <div>
      <HairType />
      <Inspiration />
      <button
        onClick={generate}>Generate Suggestion</button>
      <Suggestion />
    </div>
  )
}

export default App