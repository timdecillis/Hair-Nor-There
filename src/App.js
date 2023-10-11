import React from 'react'

import HairType from './components/HairType/HairType'
import Inspiration from './components/Inspiration/Inspiration'
import Suggestion from './components/Suggestion/Suggestion'

const App = () => {
  return (
    <div>
      <HairType />
      <Inspiration />
      <button>Generat Suggestion</button>
      <Suggestion/>
    </div>
  )
}

export default App