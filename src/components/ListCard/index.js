import './index.css'

export const ListCard = props => {
  const { item } = props
  return (
    <div className="list-card-container">
      <img
        className="checkbox"
        src={`/images/${item?.checked ? 'checked.png' : 'unchecked.png'}`}
        alt="checked-item"
      />
      <div className="list-card-text-container">
        <span className="list-card-title">{item?.name}</span>
        <span className="list-card-subtitle">{item?.quantity} unidades</span>
      </div>
      <img src="/images/arrow.png" alt="arrow-icon" className="arrow-icon" />
    </div>
  )
}
