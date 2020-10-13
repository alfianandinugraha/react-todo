import React, { Component } from 'react'
import { Todo } from '../App'

interface Props {
  toggleForm: () => any;
  addTodo: (todo: Todo) => any;
}
interface State {
  todo: Todo;
  isValidContent: boolean;
}

export default class FormAddTodo extends Component<Props, State> {
  state: State = {
    todo: {
      id: 0,
      content: '',
      isDone: false
    },
    isValidContent: true
  }

  updateContentTodo(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      todo: {
        id: new Date().getTime(),
        content: e.target.value,
        isDone: false
      }
    })
  }

  addTodo() {
    if (this.state.todo.content) return this.props.addTodo(this.state.todo)
    this.setState({isValidContent: false})
  }

  render() {
    return (
      <div>
        <div className="add-todo">
          <div className="container">
            <h3>Tambah Aktifitas</h3>
            <input
              type="text"
              placeholder="Nyatet biologi"
              value={this.state.todo.content}
              onChange={(e) => {this.updateContentTodo(e)}}
            />
            {
              this.state.isValidContent ? '' : <i>Silahkan isi aktifitas dengan benar</i>
            }
            <div className="add-todo__button-group">
              <button
                className="button button--primary"
                onClick={() => this.props.toggleForm()}>Kembali</button>
              <button className="button button--secondary" onClick={
                () => this.addTodo()
              }>Tambah</button>
            </div>
          </div>
        </div>
        <div className="backdrop" onClick={() => this.props.toggleForm()}></div>
      </div>
    )
  }
}
