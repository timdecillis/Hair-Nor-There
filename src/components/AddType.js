import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { typeAdded } from './typesSlice'

const AddType = () => {

  const dispatch = useDispatch()
  const [type, setType] = useState('')

  const onSubmitTypeClicked = () => {
    if (type) {
      console.log('type:', type)
      dispatch(typeAdded({type: type}))
    }
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