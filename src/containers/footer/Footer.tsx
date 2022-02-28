import React from 'react'
import { linkedin } from '../../components/links/imports';
import './footer.css'

const Footer = () => {
  return (
    <div className="cs__footer section__padding">
      <div className="cs__footer-heading">
        <h1 className="gradient__text">Any questions? Connect on LinkedIn</h1>
      </div>
      <div className="cs__footer-linkedin">
          <a href="https://linkedin.com/in/sebbsanchez/" target="_blank" rel="noreferrer noopener">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      <div className="cs__footer-copyright">
        <div className="cs__footer-copyright_div">
          <p>© 2022 CodeSebb</p>
        </div>
      </div>
    </div>
  )
}

export default Footer