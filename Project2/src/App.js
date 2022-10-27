import './App.css';
import React, { useState , useEffect} from 'react'
import Loading from './Loading'
import Tours from './Tours'
// import url from './url';
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const removeTour = (id) =>{
    const newTours = tours.filter((tour)=>tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async()=>{
    setLoading(true)

    try {
      const response = await fetch(url);
      const tours = await response.json()
      setLoading(false) 
      setTours(tours)
    } 
    
    catch (error) {
      setLoading(false)
      console.log(error)
    }

  }

  useEffect(()=>{
    fetchTours();
  },[])

  if (loading) {
    return(
    <main><Loading/></main>
    )
  }
  if (tours.length === 0) {
    return(
    <main>
      <div className='head'>No more tours left</div>
      <button onClick={()=>fetchTours()} className='btn'>Refresh</button>
    </main>
    )
  }
  return (
    <main>
    <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
