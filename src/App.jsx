import { useState } from 'react'
import './index.css'
import languages from './data/languages'
import TabItem from './components/TabItem/TabItem'
import Description from './components/Description/Description';

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
      <Description language={selectedTab != null ? languages[selectedTab] : null} />
    </>
  )
}

export default App
