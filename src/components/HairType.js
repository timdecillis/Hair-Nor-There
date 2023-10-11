import React from 'react'

import AddType from './AddType'
import YourHair from './YourHair'
import HairChoices from './HairChoices'

const HairType = () => {

  return (
    <div>
      <HairChoices/>
      <h2>Or</h2>
      <AddType/>
      <YourHair/>
    </div>
  )
}

export default HairType