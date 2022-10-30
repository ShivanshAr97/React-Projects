import React, { useEffect, useState } from 'react'
import './App.css';
// import url from './data';

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async ()=>{
    const response = await fetch(url);
    const newJob = await response.json()
    setJobs(newJob)
    setLoading(false)
  }
  useEffect(()=>{
    fetchJobs()
  },[])

  if(loading){
    return <div>Loading...</div>
  }

  const {id,order,title,dates,duties, company} = jobs[value]
  return (
    <>
    <h1>Experience</h1>
    <div className='div1'>{
      jobs.map((item,index)=>{
        return <button className='btns' onClick={()=>{setValue(index)}} >{item.company}</button>
      })}</div>
      <div className='div2'>
        <div className='div3'>
    <span className='span1'>{title}</span>
    <span className='span2'>{company}</span>
    </div>
    <span className='span3'>
    {dates}
    </span>
    <span className='span4'>
    {duties.map((duty,index)=>
    {
      return <><p className='span5' key={duty}>{duty}</p></>
    }
    )}
    </span>
    </div>
    </>
  );
}

export default App;
