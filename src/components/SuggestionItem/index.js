// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, onClickArrow} = props
  const {suggestion} = suggestionItem
  const onArrow = () => {
    onClickArrow(suggestion)
  }

  return (
    <li onClick={onArrow}>
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow"
        alt="arrow"
      />
    </li>
  )
}
export default SuggestionItem
