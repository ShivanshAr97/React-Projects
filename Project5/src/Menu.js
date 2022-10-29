import React from 'react'

const Menu = ({menus}) => {
  return (
    <div>
        {
            menus.map((menu)=>{
                const {id, title, category, price, img, desc} = menu
                return <article key={id}>
                    <span className='category'>{category}</span>
                    <img src={img} alt="" />
                    <div>
                    <span>{title}</span>
                    <span>{price}</span>
                    </div>
                    <span>{desc}</span>

                </article>
            })
        }
    </div>
  )
}

export default Menu