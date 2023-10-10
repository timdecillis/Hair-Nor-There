import React from 'react'

import { getTypes } from './typesSlice'
import { useSelector } from 'react-redux'


const HairChoices = () => {
  const {types} = useSelector(getTypes)
  if (!types.length) return null
  return (
    <div>
      <h2>Your hair choices</h2>
      {types.map((type, i) => <div key={i}>{type}</div>)}
    </div>
  )
}

export default HairChoices