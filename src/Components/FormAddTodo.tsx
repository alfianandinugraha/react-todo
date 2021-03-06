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

  toggleForm() {
    document.getElementById('add-todo')?.classList.add('hide-add-todo')
    this.props.toggleForm()
  }

  addTodo() {
    if (this.state.todo.content) {
      this.toggleForm()
      this.props.addTodo(this.state.todo)
    }
    this.setState({isValidContent: false})
  }

  render() {
    return (
      <div>
        <div className="add-todo" id="add-todo">
          <div className="container">
            <h3>Add Activity</h3>
            <input
              type="text"
              placeholder="Do homework"
              value={this.state.todo.content}
              onChange={(e) => {this.updateContentTodo(e)}}
            />
            {
              this.state.isValidContent ? '' : <i>Please insert activity correctly</i>
            }
            <div className="add-todo__button-group">
              <button
                className="button button--primary"
                onClick={() => this.toggleForm()}>Back</button>
              <button className="button button--secondary" onClick={
                () => this.addTodo()
              }>Add</button>
            </div>
          </div>
        </div>
        <div className="backdrop" onClick={() => this.toggleForm()}></div>
      </div>
    )
  }
}
