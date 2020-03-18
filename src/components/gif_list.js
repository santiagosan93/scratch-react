import React from 'react'
import Gif from './gif'
import './gif_list.scss'

const GifList = (props) => {

  const list = props.gifs.map(gif => <Gif gifId={gif.id} key={gif.id} className="gifs" handleClick={props.handleClick}/>)

  return(
    <div className="gif-list">
      {list}
    </div>
  )
}

export default GifList
