import React from 'react'

import { useSelector } from 'react-redux'
import { getInspirations } from './inspirationSlice'

const YourInspiration = () => {

  const inspiration = useSelector(getInspirations).userInspiration
  return (
    <div>
      <h2>Your inspiration:</h2>
      <h3>{inspiration}</h3>
    </div>
  )
}

export default YourInspiration