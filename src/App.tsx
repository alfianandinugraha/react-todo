import React, { Component } from 'react'
import FormAddTodo from './Components/FormAddTodo'
import Header from './Components/Header'
import ItemTodo from './Components/ItemTodo'
import Sidebar from './Components/Sidebar'

export interface Todo {
  id: number;
  content: string;
  isDone: boolean;
}
interface State {
  isFormShow: boolean;
  isSidebarShow: boolean;
  todos: Todo[]
}

export default class App extends Component<{}, State> {
  state: State = {
    isFormShow: false,
    isSidebarShow: false,
    todos: []
  }

  setTodos(todos: Todo[]) {
    const todosDone: Todo[] = todos.filter(todo => todo.isDone === true)
    const todosNotDone: Todo[] = todos.filter(todo => todo.isDone === false)

    todosDone.sort((a, b) => a.id - b.id)
    todosNotDone.sort((a, b) => a.id - b.id)

    this.setState({
      todos: [...todosNotDone, ...todosDone]
    })
  }

  toggleFormAddTodo() {
    const timeout = this.state.isFormShow ? 500 : 0;
    
    setTimeout(() => {
      this.setState((prevState: State) => ({ isFormShow: !prevState.isFormShow }))
    }, timeout)
  }

  toggleSidebar() {
    const timeout = this.state.isSidebarShow ? 500 : 0;

    setTimeout(() => {
      this.setState((prevState: State) => ({isSidebarShow: !prevState.isSidebarShow}))
    }, timeout)
  }

  toggleTodo(id: number) {
    let newTodos: Todo[] = this.state.todos.map(val => {
      if (val.id === id) {
        val.isDone = !val.isDone
        localStorage.setItem(`react-todo-${id}`, `${val.content}|||${val.isDone}`)
      };
      return val;
    })
    
    this.setTodos(newTodos)
  }

  deleteTodo(id: number) {
    const newTodos: Todo[] = this.state.todos.filter((todo: Todo) => todo.id !== id)
    
    this.setState({
      todos: newTodos
    })

    localStorage.removeItem(`react-todo-${id}`)
  }

  addTodo(todo: Todo) {
    const newTodos: Todo[] = this.state.todos;
    newTodos.unshift(todo);

    this.setTodos(newTodos)

    localStorage.setItem(`react-todo-${todo.id}`, `${todo.content}|||${todo.isDone}`)
  }

  componentDidMount() {
    const newTodos: Todo[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const idTodoLocalStorage: string = localStorage.key(i) || '';
      
      if (!idTodoLocalStorage.includes('react-todo-')) continue;

      const parseId = +idTodoLocalStorage.substring(11, idTodoLocalStorage.length);
      
      let localStorageContent = localStorage.getItem(idTodoLocalStorage) || "";
      let localStorageContentArray = localStorageContent.split("|||");
      
      let todo: Todo = {
        id: parseId,
        content: localStorageContentArray[0],
        isDone: localStorageContentArray[1] === "true" ? true : false
      }
      
      newTodos.push(todo)
    }

    this.setTodos(newTodos)
  }

  render() {
    const todoElementsTsx =
      this.state.todos.length ? this.state.todos.map((val: Todo, index: number) =>
        <ItemTodo
          key={val.id}
          todo={val}
          toggelTodo={this.toggleTodo.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
        />) : <p className="no-todo-message">No activities, please click Add Activity button</p>;
    
    const formAddTodoElement =
      this.state.isFormShow ?
        <FormAddTodo toggleForm={this.toggleFormAddTodo.bind(this)} addTodo={this.addTodo.bind(this)} /> : '';
    
    const sidebarElement = this.state.isSidebarShow ? <Sidebar toggleSidebar={this.toggleSidebar.bind(this)}/> : '';

    return (
      <div>
        {sidebarElement}
        <Header toggleSidebar={this.toggleSidebar.bind(this)}/>
        <div className="container content">
          <i className="message">Click to finish activity</i>
          <div id="todos">
            {todoElementsTsx}
          </div>
        </div>
        <div className="show-form-btn container">
          <button
            className="button button--primary show-form"
            onClick={() => this.toggleFormAddTodo()}
          >Add Activity</button>
        </div>
        {formAddTodoElement}
      </div>
    )
  }
}
