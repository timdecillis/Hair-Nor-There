import React from 'react'

import AddType from './components/AddType'
import HairChoices from './components/HairChoices'

const App = () => {
  return (
    <div>
      <HairChoices />
      <h2>Or</h2>
      <AddType />
    </div>
  )
}

export default App