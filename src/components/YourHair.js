import React from 'react'

import { useSelector } from 'react-redux'
import { getTypes } from './typesSlice'

const YourHair = () => {

  const type = useSelector(getTypes).userType
  return (
    <div>
      <h2>Your hair type</h2>
      {type}
    </div>
  )
}

export default YourHair