import './TabItem.css'

export default function TabItem({ title }) {
    return (
        <div className='tabItemContainer'>
            <span className='tabTitle'>{title}</span>
        </div>
    )
}