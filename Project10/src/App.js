import React, { useState } from 'react'
import './App.css';
import Alert from './Alert'
import List from './List'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({show:true, text:'', type:''})

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("Clicked");
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
    {alert.show && <Alert/>}
    <input type="text" placeholder='Complete homework' value={name} onChange={(e)=>setName(e.target.value)} name="" id="" />
    <button type='submit'>{isEditing?'Edit':'Submit'}</button>
    </form>
    <List/>
    <button>Clear List</button>
    </>
  );
}

export default App;
