import React, { useState } from 'react'
import './App.css';
import data from './data'

function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  return (
    <>
    Lorem ipsum dolor sit amet.
    </>
  );
}

export default App;
