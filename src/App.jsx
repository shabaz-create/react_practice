import { useState } from 'react';
import ListItem from './components/Listitem';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <ListItem/>
      </div>
  )
}

export default App
