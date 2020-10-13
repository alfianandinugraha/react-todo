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
          <div className="header__icon-nav">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="23" viewBox="0 0 35 23">
              <g id="hambuger-menu" transform="translate(-36 -18)">
                <rect id="Rectangle_5" data-name="Rectangle 5" width="35" height="3" rx="1.5" transform="translate(36 18)" fill="#fff" />
                <rect id="Rectangle_6" data-name="Rectangle 6" width="28" height="3" rx="1.5" transform="translate(36 28)" fill="#fff" />
                <rect id="Rectangle_7" data-name="Rectangle 7" width="22" height="3" rx="1.5" transform="translate(36 38)" fill="#fff" />
              </g>
            </svg>
          </div>
          <h1>React ToDo</h1>
        </div>
      </header>
    )
  }
}
