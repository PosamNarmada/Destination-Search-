/* Write your CSS here */
import './index.css'

const DestinationItem = props => {
  const {DestinationDetails} = props
  const {imgUrl, name} = DestinationDetails

  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
