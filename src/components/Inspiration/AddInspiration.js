import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { inspirationAdded, getInspirations } from './inspirationSlice'

const AddInspiration = () => {

  const dispatch = useDispatch()
  const {inspirations} = useSelector(getInspirations)
  const [inspiration, setInspiration] = useState('')

  const onSubmitInspirationClicked = () => {
    if (!inspiration) return
    if (inspirations.includes(inspiration)) return console.log('type already exists')
      dispatch(inspirationAdded({inspiration}))
  }

  return (
    <div>
      <h2>Enter a new inspiration</h2>
      <input onChange={e => setInspiration(e.target.value)}></input>
      <button onClick={onSubmitInspirationClicked}>Submit</button>
    </div>
  )
}

export default AddInspiration