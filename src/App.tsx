import React, { Component } from 'react'
import FormAddTodo from './Components/FormAddTodo'
import Header from './Components/Header'
import ItemTodo from './Components/ItemTodo'

interface Props {
  
}
interface State {
  isFormShow: boolean;
}

export default class App extends Component<Props, State> {
  state: State = {
    isFormShow: false
  }

  toggleFormAddTodo() {
    this.setState((prevState: State) => {
      return {
        isFormShow: !prevState.isFormShow
      }
    })
  }

  render() {
    const todoElementsTsx = [1, 2, 3, 4, 5].map((val: any, index: number) => <ItemTodo key={index} />)
    
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
