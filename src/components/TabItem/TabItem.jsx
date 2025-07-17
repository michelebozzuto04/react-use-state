import './TabItem.css'

export default function TabItem({ title, onClick, selected }) {
    return (
        <button onClick={onClick} className={selected ? 'tabItemContainerActive' : 'tabItemContainer'}>
            <span className={selected ? 'tabTitleActive' : 'tabTitle'}>{title}</span>
        </button>
    )
}