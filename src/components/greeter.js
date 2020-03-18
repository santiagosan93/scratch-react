import React, { Component } from 'react';
import './greeter.scss'

// const Greeter = (props) => {
//   return <div> Hello, {props.name}</div>
// }

class Greeter extends Component {
  constructor(props){
    super(props)
    this.state = {
      clicked: false,
      counter: 0,
      fruit: "banana"
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('clicked')
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div className={ this.state.clicked ? "clicked" : null } onClick={this.handleClick}>
        Hello, {this.props.name} {this.state.counter}
      </div>
    )
  }

}

export default Greeter
