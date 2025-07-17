import { useState } from 'react'
import './index.css'
import languages from './data/languages'
import TabItem from './components/Tabs/TabItem'

function App() {
  const [selectedTab, setSelectedTab] = useState(null);

  function handleClick(index) {
    setSelectedTab(index)
  }

  return (
    <>
      <h1>Learn Web development</h1>
      <div className='tabsContainer'>
        {languages.map((language, index) => (
          <TabItem key={index} onClick={() => handleClick(index)} selected={selectedTab === index} title={language.title} />
        ))}
      </div>
      <h2>{selectedTab != null && languages[selectedTab].title}</h2>
    </>
  )
}

export default App
