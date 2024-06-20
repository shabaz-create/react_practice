import { useState } from 'react';
import ListItem from './components/Listitem';
import './App.css';
import InputItem from './components/InputItem';
import products from './assets/products';
function App() {
  const [items, setItems] = useState(products)
function itemInput(item){
  setItems([item]);
  
}
  return (
      <div className="container">
        <InputItem input={itemInput}/>
        <ListItem products={items}/>
      </div>
  )
}

export default App
