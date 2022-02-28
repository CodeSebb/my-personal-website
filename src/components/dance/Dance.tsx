import React from 'react';
import './dance.css';

const Dance = () => {
  return (
    <div className="cs__cta" id="dance">
      <div className="cs__cta-content">
        <p>Competition: Prelude 2016</p>
        <h3>Team: Press P.L.A.Y.</h3>
      </div>
      <div className="cs__cta-btn">
      <a href="https://www.youtube.com/watch?v=Vp1rm3TvAts" target="_blank" rel="noreferrer noopener">
        <button type="button">2nd Place 2016</button>
        </a>
      </div>
      <div className="cs__cta-content">
        <p>Event: Full Potential Training Thursday</p>
        <h3>Bay Area Workshop</h3>
      </div>
      <div className="cs__cta-btn">
      <a href="https://www.youtube.com/watch?v=8oV4kxdBD-U" target="_blank" rel="noreferrer noopener">
        <button type="button">FP Workshop</button>
        </a>
      </div>
    </div>
  )
}

export default Dance