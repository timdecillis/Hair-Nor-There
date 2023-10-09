import React from 'react'

import { getTypes } from './typesSlice'
import { useSelector } from 'react-redux'


const HairChoices = () => {
  const choices = useSelector(getTypes)
  console.log(choices)
  return (
    <div>
      <h2>Your hair choices</h2>
      {/* {choices.map((choice, i) => <div key={i}>{choice}</div>)} */}
    </div>
  )
}

export default HairChoices