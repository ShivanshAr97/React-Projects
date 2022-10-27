import React from 'react'
import './App.css'

const List = ({people}) => {
  return (
    <>
    <div className='list'>List Contents</div>
    {people.map((person)=>{
      const {id, name, age, image} = person;
      return <article key={id}>
        <img className='img' src={image} alt="" />
        <div className='div1'>
        <div className='name'>Name: {name}</div>
        <div className='age'>Age: {age}</div>
        </div>
      </article>
    })}
    </>
  )
}

export default List