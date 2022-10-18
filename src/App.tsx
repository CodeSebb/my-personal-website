import React from 'react';
import { Footer, Code, Features, CodeSebb, Header } from './containers'
import { Dance, Links, Navbar } from './components'
import './App.css'

/*App function*/
function App() {
  return (
    <div className="App">
      /*Created the separate components & containers to then stack on top of one another.
        Many of the components within this overall div have their own specific styling choices,
        which is why they each contain their own CSS files to customize and make more modular.
      */
      <div className="gradient__bg">
        /*Top of the webpages should have a separate color theme and stylization choices than the bottom parts. 
          This was a major reason why I decided to have both the  Navbar and Header components in a separate div,
          that way it could be more personalized.
        */
        <Navbar />
        /* my-personal-website\src\components\navbar */
        <Header />
        /* my-personal-website\src\containers\header */
      </div>
      <Links />
      /* my-personal-website\src\components\header */
      <CodeSebb />
      /* my-personal-website\src\containers\codesebb */
      <Features />
      /* my-personal-website\src\components\features */
      <Code />
      /* my-personal-website\src\containers\code */
      <Dance />
      /* my-personal-website\src\components\dance */
      <Footer />
      /* my-personal-website\src\containers\footer */
    </div>
  );
}

export default App;
