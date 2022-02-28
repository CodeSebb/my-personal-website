import React from 'react'
import { Feature } from '../../components';
import './codesebb.css'

const CodeSebb = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="about">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="CodeSebb" text="My life in a snapshot."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Student first, always.</h1>
        <p>About me</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Dance" text="It’s okay to start “later” than others as long as you commit to focusing on the foundations and being humble enough to overcome the initial learning curve."/>
        <Feature title="Coffee" text="Whether you are a student or teacher, fostering and maintaining a safe learning space is integral for success. I'm grateful for my time spent as a barista cultivating a positive environment for all to feel welcome."/>
        <Feature title="Code" text="Failure is inevitable, but embracing the lessons learned leads to immense growth, whether it’s overcoming a dance injury or challenging bug in the code."/>
      </div>
    </div>
  )
}

export default CodeSebb;