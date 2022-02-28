import React from 'react'
import './features.css'
import { Feature } from '../../components';

const featuresData = [

  {
    title: 'Self-Starter' ,
    text: 'I spent my final semester in undergrad not only taking 18 units and working full-time, but also teaching myself to code up to 30 hours a week.'
  },

  {
    title: 'Resourceful' ,
    text: 'In every situation, I look for the optimal path with whatever resources I have available to ensure I generate value for the organization.'
  },

  {
    title: 'Reliable' ,
    text: 'Everything I do is done with 150% commitment. From professionally dancing for 7+ years, to serving as a barista for 4+ years, I establish a strong foundation as a dependable team member.'
  },

  {
    title: 'Determined' ,
    text: 'To learn software engineering without a CS degree takes a tremendous amount of commitment. It usually involves copious amounts of caffeine. Thankfully, I have both.'
  }
]

const Features = () => {
  return (
    <div className="cs__features section__padding" id="features">
      <div className="cs__features-heading">
        <h1 className="gradient__text">Non-traditional paths are my thing. </h1>
        <p>Here's what I've learned so far:</p>
      </div>
      <div className="cs__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features