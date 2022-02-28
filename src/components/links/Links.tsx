  import React from 'react';
  import './links.css';
  import { github, linkedin } from './imports';

  const Links = () => {
    return (
      <div className="cs__brand section__padding">
        <div>
          <a href="https://github.com/CodeSebb" target="_blank" rel="noreferrer noopener">
            <img src={github} alt="github" />
          </a>
        </div>
        <div>
          <a href="https://linkedin.com/in/sebbsanchez/" target="_blank" rel="noreferrer noopener">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    )
  }

  export default Links