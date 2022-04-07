// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  searchGoogle = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  selectSuggestion = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachObject =>
      eachObject.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="gs-main-bg">
        <div className="gs-main-container">
          <img
            className="gs-google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="gs-search-card">
            <div className="gs-search-container">
              <img
                className="gs-search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                className="gs-input-search"
                placeholder="Search Google"
                type="search"
                onChange={this.searchGoogle}
                value={searchInput}
              />
            </div>
            <ul className="gs-list-items-container">
              {searchResults.map(eachObject => (
                <SuggestionItem
                  key={eachObject.id}
                  suggestion={eachObject.suggestion}
                  selectSuggestionFunction={this.selectSuggestion}
                  searchResults={searchResults}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
