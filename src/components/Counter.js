
import React from 'react'
import { useState } from 'react'

const Counter = ({value}) => {

  const [input, setInput] = useState('');

  const submit = (e) => {
    e.preventDefault();
    let value = input;
    console.log('value:',value)
    setInput('');
  }

  return (
    <>
      <div>Counter: {value} </div>
      <form onSubmit={submit}>
        <input onChange={(e) => setInput(e.target.value)} type='text' placeholder='enter amount' value={input}></input>
        <input type='submit' value='Set counter'></input>
      </form>
    </>
  )
}

export default Counter
