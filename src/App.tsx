import React, { Component } from 'react'
import FormAddTodo from './Components/FormAddTodo'
import Header from './Components/Header'
import ItemTodo from './Components/ItemTodo'

interface Props {
  
}

export interface Todo {
  id: number;
  content: string;
  isDone: boolean;
}
interface State {
  isFormShow: boolean;
  todos: Todo[]
}

export default class App extends Component<Props, State> {
  state: State = {
    isFormShow: false,
    todos: [
      {
        id: 1,
        content: "Lorem, ipsum dolor.",
        isDone: false
      },
      {
        id: 2,
        content: "Lorem, ipsum dolor.",
        isDone: false
      },
      {
        id: 3,
        content: "Lorem, ipsum dolor.",
        isDone: false
      }
    ]
  }

  toggleFormAddTodo() {
    this.setState((prevState: State) => {
      return {
        isFormShow: !prevState.isFormShow
      }
    })
  }

  render() {
    const todoElementsTsx = this
      .state
      .todos
      .map((val: Todo, index: number) => <ItemTodo key={index} />)
    
    const formAddTodoElement =
      this.state.isFormShow ?
        <FormAddTodo toggleForm={this.toggleFormAddTodo.bind(this)} /> : '';

    return (
      <div>
        <Header />
        <div className="container content">
          <i className="message">Klik untuk menyelesaikan aktifitas</i>
          <div id="todos">
            {todoElementsTsx}
          </div>
        </div>
        <div className="show-form-btn container">
          <button
            className="button button--primary show-form"
            onClick={() => this.toggleFormAddTodo()}
          >Tambah Aktifitas</button>
        </div>
        {formAddTodoElement}
      </div>
    )
  }
}
