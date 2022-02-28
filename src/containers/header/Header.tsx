import React from 'react'
import './header.css'
import Me from '../../assets/Me.png'

const Header = () => {
  return (
    <div className="cs__header section__padding" id="home">
      <div className="cs__header-content">
        <h1 className="gradient__text">Hi, I'm Sebastian, and welcome to my website!</h1>
        <p>"Ancora Imparo," or "Yet, still I learn" sums me up as a person perfectly.</p>

        
      </div>
      <div className="cs__header-image">
          <img src={Me} alt="Me" />
        </div>
    </div>

  )
}

export default Header