import React from 'react';
import { Footer, Code, Features, CodeSebb, Header } from './containers'
import { Dance, Links, Navbar } from './components'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Links />
      <CodeSebb />
      <Features />
      <Code />
      <Dance />
      <Footer />
    </div>
  );
}

export default App;
