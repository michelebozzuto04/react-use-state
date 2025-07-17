import './Tabs.css'
import TabItem from './TabItem'
import languages from '../../data/languages'

export default function Tabs() {
    return (
        <div className='tabsContainer'>
            {languages.map((language, index) => (
                <TabItem key={index} title={language.title} />
            ))}
        </div>
    )
}