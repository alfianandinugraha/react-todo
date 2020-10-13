import React, { Component } from 'react'

interface Props {
  toggleSidebar: () => any;
}

export default class Sidebar extends Component<Props, {}> {
  toggleSidebar() {
    let sidebarElement = document.getElementById('sidebar')
    sidebarElement?.classList.add('showing-sidebar')
    this.props.toggleSidebar()
  }

  render() {
    return (
      <div>
        <aside id="sidebar" className="container sidebar">
          <div className="close-sidebar-btn" onClick={() => this.toggleSidebar()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26.87" height="26.87" viewBox="0 0 26.87 26.87">
              <g id="close-btn" transform="translate(-286.065 -49.065)">
                <rect id="Rectangle_5" data-name="Rectangle 5" width="35" height="3" rx="1.5" transform="translate(288.186 49.065) rotate(45)" fill="#d90000" />
                <rect id="Rectangle_10" data-name="Rectangle 10" width="35" height="3" rx="1.5" transform="translate(286.065 73.814) rotate(-45)" fill="#d90000" />
              </g>
            </svg>
          </div>
          <div id="author">
            <h3 className="sidebar__title">About Author</h3>
            <img src="/Images/alfian-andi.png" alt="" className="author__image"/>
            <p className="author__biograph">Hiii, I am Alfian Andi Nugraha. I am from Indonesia, I love coding and programming. Nice to meet you :). Looking for full-stack developer ? Hire me</p>
          </div>
          <div id="contact" className="contact">
            <h3 className="sidebar__title">Contact me</h3>
            <a
              href="https://linktr.ee/alfianandinugraha"
              className="contact__url"
            >https://linktr.ee/alfianandinugraha</a>
          </div>
        </aside>
        <div className="backdrop" onClick={() => this.toggleSidebar()}></div>
      </div>
    )
  }
}
