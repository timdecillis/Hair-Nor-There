import React from 'react'

import { getTypes } from './typesSlice'
import { useSelector } from 'react-redux'


const HairChoices = () => {
  const choices = useSelector(getTypes).types
  if (!choices.length) return null
  return (
    <div>
      <h2>Your hair choices</h2>
      {choices.map((choice, i) => <div key={i}>{choice}</div>)}
    </div>
  )
}

export default HairChoices