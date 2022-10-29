import React from 'react'

const Categories = ({category, filterItems}) => {
   
  return (
    <>
    {
    category.map((category,index)=>{
        return <button key={index} onClick={()=>{filterItems(category)}}>{category}</button>
    })
}
    </>
  )
}

export default Categories