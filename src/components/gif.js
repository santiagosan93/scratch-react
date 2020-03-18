import React from 'react'
import './gif.scss'

const Gif = (props) => {
  const src = `https://media0.giphy.com/media/${props.gifId}/giphy.gif?cid=ecf05e47baeb0844d47727e435ac3be1bcd23f72159d80e9&rid=giphy.gif`

  return(
    <div  onClick={event => props.handleClick(props.gifId)}>
      <img src={src} alt="" className={props.className}/>
    </div>
  )
}

export default Gif
