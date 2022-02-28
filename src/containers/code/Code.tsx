import React from 'react'
import './code.css'
import codeSample from '../../assets/codeSample.png';

const Possibilities = () => {
  return (
    <div className="gpt3__possibility section__padding" id="code">
      <div className="gpt3__possibility-image">
        <img src={codeSample} alt="codesample" />
      </div>
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">Code snippet for the Navbar component.</h1>
      </div>
    </div>
  )
}

export default Possibilities