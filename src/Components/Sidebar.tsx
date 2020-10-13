import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <aside id="sidebar" className="container">
          <div id="author">
            <h3 className="author__title">About Author</h3>
            <img src="/Images/alfian-andi.png" alt="" className="author__image"/>
            <p className="author__biograph">Hiii, I am Alfian Andi Nugraha. I am from Indonesia, I love coding and programming. Nice to meet you :). Looking for full-stack developer ? Hire me</p>
          </div>
        </aside>
        <div className="backdrop"></div>
      </div>
    )
  }
}
