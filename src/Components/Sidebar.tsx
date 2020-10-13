import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <aside id="sidebar" className="container sidebar">
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
        <div className="backdrop"></div>
      </div>
    )
  }
}
