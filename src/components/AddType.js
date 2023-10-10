import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { typeAdded, getTypes } from './typesSlice'

const AddType = () => {

  const dispatch = useDispatch()
  const {types} = useSelector(getTypes)
  const [type, setType] = useState('')

  const onSubmitTypeClicked = () => {
    if (!type) return
    if (types.includes(type)) return console.log('type already exists')
      dispatch(typeAdded({type: type}))
  }

  return (
    <div>
      <h2>Enter a new hair type</h2>
      <input onChange={e => setType(e.target.value)}></input>
      <button onClick={onSubmitTypeClicked}>Submit</button>
    </div>
  )
}

export default AddType