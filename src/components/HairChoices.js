import React from 'react'

const choices = ['dry', 'oily', 'normal'];

const HairChoices = () => {
  return (
    <div>
      <h2>Your hair choices</h2>
      {choices.map((choice, i) => <div key={i}>{choice}</div>)}
    </div>
  )
}

export default HairChoices