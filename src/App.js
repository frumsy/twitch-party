import React from 'react';
import './App.css';
import Stream from './components/Stream'

function App() {
  return (
    <div >
      <body style={{backgroundColor: 'white'}}>
      <div className="block"><Stream/></div>
      <div className="block"><Stream/></div>
      </body>
    </div>
  );
}

export default App;
