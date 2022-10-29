import React, {useState} from 'react'
import './App.css';
import Categories from './Categories';
import Menu from './Menu';
import data from './data'

function App() {
  const [menu, setMenu] = useState(data)
  const allCategories = ['all', ...new Set(data.map((item)=>item.category))]
  // console.log(allCategories);
  const [category, setCategory] = useState(allCategories)

  const filterItems=(category)=>{
    if(category === 'all'){
      setMenu(data)
      return
    }

    const newItems=data.filter((item)=>item.category===category)
    
    setMenu (newItems)
  }
  return (
    <>
    <h2>Menu</h2>
    <Categories category={category} filterItems = {filterItems}/>
    <Menu menus={menu}/>
    <br />
    </>
  );
}

export default App;
