import React, { Component } from 'react'

interface Props {
  
}
interface State {
  
}

export default class FormAddTodo extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className="add-todo">
        <div className="container">
          <h3>Tambah Aktifitas</h3>
          <input type="text" placeholder="Nyatet biologi"/>
          <div className="add-todo__button-group">
            <button className="button button--primary">Kembali</button>
            <button className="button button--secondary">Tambah</button>
          </div>
        </div>
      </div>
    )
  }
}
