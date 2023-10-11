import React from 'react'

import { getTypes, typeChosen } from './typesSlice'
import { useSelector, useDispatch } from 'react-redux'


const HairChoices = () => {
  const {types} = useSelector(getTypes)
  const dispatch = useDispatch()


  const onTypeClicked = (type) => {
    dispatch(typeChosen({ type }))
  }

  if (!types.length) return null
  return (
    <div>
      <h2>Choose a hair type</h2>
      {types.map((type, i) => <button key={i} onClick={
        () => {
          onTypeClicked(type)
        }
        }>{type}</button>)}
    </div>
  )
}

export default HairChoices