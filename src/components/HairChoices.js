import React from 'react'

import { getTypes } from './typesSlice'
import { useSelector } from 'react-redux'


const HairChoices = () => {
  const {types} = useSelector(getTypes)
  if (!types.length) return null
  return (
    <div>
      <h2>Choose a hair type</h2>
      {types.map((type, i) => <button key={i}>{type}</button>)}
    </div>
  )
}

export default HairChoices