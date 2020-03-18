import React from 'react'
import Gif from './gif'

const MainScene = (props) => {
  return(
    <div className="container">
      <Gif gifId={props.gifId} className="main-gif"/>
    </div>
  )
}

export default MainScene
