import React from 'react'
import './search_bar.scss'

const SearchBar = (props) => {

  return(
    <input type="text" placeholder="Search for a gif!" className="inputt" onChange={props.handleChange}/>
  )
}

export default SearchBar
