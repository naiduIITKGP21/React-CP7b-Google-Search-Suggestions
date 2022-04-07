// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestion, selectSuggestionFunction} = props

  const onClickArrow = () => {
    selectSuggestionFunction(suggestion)
  }

  return (
    <li className="gs-each-list-container">
      <p className="gs-suggestion">{suggestion}</p>
      <button className="gs-arrow-button" type="button" onClick={onClickArrow}>
        <img
          className="gs-arrow-icon"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
