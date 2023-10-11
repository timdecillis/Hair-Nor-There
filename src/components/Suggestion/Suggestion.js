import React from 'react'
import { useSelector } from 'react-redux'

import { getSuggestion } from './suggestionSlice'

const Suggestion = () => {
  const { suggestion } = useSelector(getSuggestion)
  return (
    <h1>Your suggestion: {suggestion}</h1>
  )
}

export default Suggestion