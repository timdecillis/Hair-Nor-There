import React from 'react'

import { getInspirations, inspirationChosen } from './inspirationSlice'
import { useSelector, useDispatch } from 'react-redux'


const InspirationChoices = () => {
  const {inspirations} = useSelector(getInspirations)
  const dispatch = useDispatch()

  const onInspirationClicked = (inspiration) => {
    dispatch(inspirationChosen({ inspiration }))
  }

  if (!inspirations.length) return null
  return (
    <div>
      <h2>Choose a diva</h2>
      {inspirations.map((inspiration, i) => <button key={i} onClick={
        () => {
          onInspirationClicked(inspiration)
        }
        }>{inspiration}</button>)}
    </div>
  )
}

export default InspirationChoices