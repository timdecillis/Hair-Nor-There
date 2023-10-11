import React from 'react'

import InspirationChoices from './InspirationChoices'
import AddInspiration from './AddInspiration'
import YourInspiration from './YourInspiration'

const Inspiration = () => {

  return (
    <div>
      <InspirationChoices/>
      <h3>Or</h3>
      <AddInspiration/>
      <YourInspiration/>
    </div>
  )
}

export default Inspiration

