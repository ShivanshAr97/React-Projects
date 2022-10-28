import React, {useState} from 'react'
import data from './data'
import './App.css';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {id, name, job, image, text} = data[index]

  const checkNum = (number)=>{
    if(number<0){
        return data.length-1;
    }
    if (number>data.length-1){
        return 0;
    }
    return number;

  }
  const next=()=>{
    setIndex((index)=>{
        let newIndex = index+1;
        return checkNum(newIndex);
    })
  }

  const prev=()=>{
    setIndex((index)=>{
        let newIndex = index-1;
        return checkNum(newIndex);
    })
  }
  const random=()=>{
    let ran = Math.floor(Math.random() * (data.length - 0))
    if (ran === index) {
        ran=index-1
    }
    console.log(ran);
    setIndex(checkNum(ran))
  }
  return (
    <main>
        <img src={image} alt="" />
      <div className='div1'>
        <span className='name'>{name}</span>
        <span className='job'>{job}</span>
    </div>
    <span className='text'>{text}</span>
    <div>
    <button onClick={prev}>&lt;</button>
    <button onClick={next}>&gt;</button>
    </div>
    <button onClick={random}>Suprise me</button>
    </main>
  )
}

export default Review