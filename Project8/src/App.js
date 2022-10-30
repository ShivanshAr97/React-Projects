import React, { useState } from 'react'
import './App.css';
import data from './data'

function App() {
  const [count, setCount] = useState(1)
  const [content, setContent] = useState([])
  let amout = count 

  const handleSubmit = (e) => {
    e.preventDefault();
    setContent(data.slice(0, amout))  
  if (amout<=0) {
    amout=0;
}
if (amout>8) {
  amout=8
}
  }
return (
  <>
    Lorem text generator:
    <form onClick={handleSubmit}>
      <label htmlFor="amout">Paragraphs</label>
      <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
      <button type='submit'>Generate</button>
      <article>
        {content.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </form>
  </>
);
}

export default App;
