import React, { useState } from 'react'
import data from './data'

const Question = ({ title, info }) => {
  const [questions, setQuestions] = useState(data);
  const [content, SetContent] = useState('+')
  const Show = () => {
    content === '+' ? SetContent('--') : SetContent('+')
  }
  return (
    <>
    <article>
      <div className='div1'>
      <h4>{title}</h4>
      <button onClick={Show}>{content}</button>
      </div>
      
      <p>{(content === '+') ? '' : info}</p>
    </article>
    <br />
    </>
  )
}

export default Question