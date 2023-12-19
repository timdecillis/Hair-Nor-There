import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import { set } from './components/actions'
import store from './newStore'

const App = () => {

  const [input, setInput] = useState('');

  const dispatch = useDispatch();
  let value = useSelector(state => state.value);

  const submit = (e) => {
    e.preventDefault();
    let value = input;
    console.log('value:',value)
    dispatch(set(value));
    setInput('');
  }

  return (
    <>
      <div>Counter: {value}</div>
      <form onSubmit={submit}>
        <input onChange={(e) => setInput(e.target.value)} type='text' placeholder='enter amount' value={input}></input>
        <input type='submit' value='Set counter'></input>
      </form>
    </>
  )
}

export default App
// import { useSelector, useDispatch } from 'react-redux'

// import HairType from './components/HairType/HairType'
// import Inspiration from './components/Inspiration/Inspiration'
// import Suggestion from './components/Suggestion/Suggestion'
// import { getInspirations } from './components/Inspiration/inspirationSlice'
// import { getTypes } from './components/HairType/typesSlice'
// import { createSuggestion } from './components/Suggestion/suggestionSlice'

// const App = () => {
//   const { userType } = useSelector(getTypes)
//   const type = userType
//   const { userInspiration } = useSelector(getInspirations)
//   const inspiration = userInspiration
//   const dispatch = useDispatch()

//   const generate = () => {
//     let suggestion;
//     if (!type || !inspiration) return
//     if (type === 'oily' && inspiration === 'Lady Gaga') {
//       suggestion = 'The Greasy Diva'
//     }
//     if (type === 'normal' && inspiration === 'Lady Gaga') {
//       suggestion = 'The Basic Diva'
//     }
//     if (type === 'dry' && inspiration === 'Lady Gaga') {
//       suggestion = 'The Starchy Diva'
//     }
//     if (type === 'oily' && inspiration === 'Dolly Parton') {
//       suggestion = 'The Greasy Queen'
//     }
//     if (type === 'normal' && inspiration === 'Dolly Parton') {
//       suggestion = 'The Basic Queen'
//     }
//     if (type === 'dry' && inspiration === 'Dolly Parton') {
//       suggestion = 'The Starchy Queen'
//     }
//     if (type === 'oily' && inspiration === 'Madonna') {
//       suggestion = 'The Greasy Icon'
//     }
//     if (type === 'normal' && inspiration === 'Madonna') {
//       suggestion = 'The Basic Icon'
//     }
//     if (type === 'dry' && inspiration === 'Madonna') {
//       suggestion = 'The Starchy Icon'
//     }
//     dispatch(createSuggestion({ suggestion }))

//   }

//   return (
//     <div>
//       <HairType />
//       <Inspiration />
//       <button
//         onClick={generate}>Generate Suggestion</button>
//       <Suggestion />
//     </div>
//   )
// }

// export default App