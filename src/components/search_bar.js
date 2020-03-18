import React from 'react'

const SearchBar = (props) => {

  return(
    <input type="text" placeholder="Search for a gif!" className="inputt" onChange={props.handleChange}/>
  )
}

export default SearchBar
