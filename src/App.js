import React from 'react';
import logo from './logo.svg';
import './App.css';
import Journal from './component/Journal'

function App() {
  return (
  <Journal>
    <Journal.Header>
      suck it 
    </Journal.Header>
    <Journal.Body>
    </Journal.Body>
    <Journal.Submit>
      submit 
    </Journal.Submit>
  </Journal>
  )
}

export default App;
