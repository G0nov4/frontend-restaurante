import React, { Component } from 'react'

export default class Mesa extends Component {
  render() {
    return (
      <div><h1>Hola soy una mesa y estoy: {this.props.msgEstado}</h1></div>
    )
  }
}
