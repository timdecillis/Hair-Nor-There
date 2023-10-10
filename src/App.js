import React from 'react'

import AddType from './components/AddType'
import HairChoices from './components/HairChoices'
import YourHair from './components/YourHair'

const App = () => {
  return (
    <div>
      <HairChoices />
      <h2>Or</h2>
      <AddType />
      <YourHair/>
    </div>
  )
}

export default App