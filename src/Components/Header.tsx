import React, { Component } from 'react'

interface Props {
  
}
interface State {
  
}

export default class Header extends Component<Props, State> {
  state = {}

  render() {
    return (
      <header id="Header">
        <div className="header container">
          <h1>React ToDo</h1>
        </div>
      </header>
    )
  }
}
