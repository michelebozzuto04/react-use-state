import { useState } from 'react'
import './index.css'
import Tabs from './components/Tabs/Tabs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learn Web development</h1>
      <Tabs />
    </>
  )
}

export default App
