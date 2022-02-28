import React from 'react'
import './code.css'
import codeSample from '../../assets/codeSample.png';

const Possibilities = () => {
  return (
    <div className="cs__possibility section__padding" id="code">
      <div className="cs__possibility-image">
        <img src={codeSample} alt="codesample" />
      </div>
      <div className="cs__possibility-content">
        <h1 className="gradient__text">Code snippet for the Navbar component.</h1>
      </div>
    </div>
  )
}

export default Possibilities