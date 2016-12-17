import React, { Component } from 'react'
import './DisplayBook.css'

export default class DisplayBook extends Component {
  constructor() {
    super()
    this.state = {
      x: 0,
      y: 0
    }
  }

  move = (e) => {
    const x = (e.nativeEvent.offsetY - 100) / 3.6
    const y = (e.nativeEvent.offsetX - 100) / 3.6

    this.setState({
      x: x,
      y: y
    })
  }

  getPosition() {
    const y = this.state.y
    const x = -this.state.x

    const cubeRotation = {
      transform: `translateZ(-1000px) rotateY(${y}deg) rotateX(${x}deg)`
    }
    return cubeRotation
  }

  render() {
    return (
      <div onMouseMove={this.move} className="cube-container">
        <div className="cube" style={this.getPosition()}>
          <div className="front"></div>
          <div className="back"></div>
          <div className="right"></div>
          <div className="left"></div>
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
      </div>
    )
  }
}
