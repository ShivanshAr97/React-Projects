import React from 'react'
import Question from './Question';
import './App.css';
import questions from './data';

function App() {
  return (
    <>
    <h2>Frequently Asked Questions (FAQs)</h2>
    {
      questions.map((question)=>{
        return <Question key={question.id}{...question} />
      })
    }
    </>
  );
}

export default App;