import { useState } from 'react';
import './App.css';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data)
  function clear(){
    setPeople([])
    document.getElementById("btn").style.cursor="default"
  }
  return (
    <div className='whole'>
    <h3>{people.length} birthdays today</h3>
    <List people={people}/>
    <button id='btn' onClick={clear}>Clear contents</button>
    </div>
  );
}

export default App;
