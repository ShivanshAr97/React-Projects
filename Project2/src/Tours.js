import React from 'react'
import Tour from './Tour'

const Tours = ({tours,removeTour}) => {
  return (
    <section>
    <p className='head'>Our tours</p>
    <div className='tours'>{tours.map((tour)=>{
      return <Tour key={tour.id}{...tour} removeTour={removeTour}/>
    })}</div>
    </section>


  )
}

export default Tours