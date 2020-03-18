import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import MainScene from './components/main_scene';
import GifList from './components/gif_list';
import giphy from 'giphy-api';
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: "IzdL5AH7teZSOPnqrw",
      gifs: [
        {id: 'IzdL5AH7teZSOPnqrw'},
        {id: '9DlDFQnAB66wC59MVX'}
      ]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleResponse = this.handleResponse.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
    this.setState({
      selected: id
    })
  }

  handleResponse(errors, response) {
    this.setState({
      gifs: response.data
    })
  }

  handleChange(event) {
    const query = event.currentTarget.value
    const key = 'jne7Phkbbgd5L9XL0RQvDfkDxPa7yV1L'
    giphy(key).search({
      q: query,
      rating: 'g',
      limit: 3
    }, this.handleResponse)
  }

  render() {
    return(
    <div className="container">
      <SearchBar handleChange={this.handleChange}/>
      <div className="content">
        <MainScene gifId={this.state.selected} />
        <GifList gifs={this.state.gifs} handleClick={this.handleClick}/>
      </div>
    </div>
    )
  }
}

export default App;
