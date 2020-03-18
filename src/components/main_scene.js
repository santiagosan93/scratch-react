import React from 'react'
import Gif from './gif'
import './main_scene.scss'

const MainScene = (props) => {
  return(
    <div className="container">
      <Gif gifId={props.gifId} className="main-gif"/>
    </div>
  )
}

export default MainScene
