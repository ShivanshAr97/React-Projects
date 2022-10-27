import React, {useState} from 'react'

const Tour = ({id, image, info, price, name, removeTour}) => {

  const [readmore, setReadmore] = useState(false)

  function show() {
    setReadmore(!readmore)
  }

  return (
    <article className='art'>
      <img className='image' src={image} alt="" />
      <div className='div1'>
      <h2>{name}</h2>
      <h2>Rs. {price}</h2>
      </div>
      <p>{readmore?info:`${info.substring(0,250)}...`}
      <button className='btn2' onClick={show}>{readmore?' Show less':' Read more'}</button>
      </p>
      <button onClick={()=>removeTour(id)} className='btn'>Not Interested</button>
    </article>
  )
}

export default Tour