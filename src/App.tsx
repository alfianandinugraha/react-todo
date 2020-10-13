import React, { Component } from 'react'
import FormAddTodo from './Components/FormAddTodo'
import Header from './Components/Header'
import ItemTodo from './Components/ItemTodo'
import Sidebar from './Components/Sidebar'

interface Props {
  
}

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

export default class App extends Component<Props, State> {
  state: State = {
    isFormShow: false,
    isSidebarShow: false,
    todos: [
      {
        id: 1,
        content: "Belajar Fisika",
        isDone: false
      },
      {
        id: 2,
        content: "Belajar Biologi",
        isDone: true
      },
      {
        id: 3,
        content: "Mabar among us",
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

  toggleSidebar() {
    this.setState((prevState: State) => {
      return {
        isSidebarShow: !prevState.isSidebarShow
      }
    })
  }

  toggleTodo(id: number) {
    const newTodos: Todo[] = this.state.todos.map(val => {
      if (val.id === id) {
        val.isDone = !val.isDone
        localStorage.setItem(`react-todo-${id}`, `${val.content}|||${val.isDone}`)
      };
      return val;
    })

    this.setState({
      todos: newTodos
    })
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

    this.setState({
      todos: newTodos
    })

    this.toggleFormAddTodo()

    localStorage.setItem(`react-todo-${todo.id}`, `${todo.content}|||${todo.isDone}`)
  }

  componentDidMount() {
    const newTodo: Todo[] = [];

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
      
      newTodo.push(todo)
    }

    newTodo.sort((a, b) => a.id - b.id)

    this.setState({
      todos: newTodo
    })
  }

  render() {
    const todoElementsTsx =
      this.state.todos.length ? this.state.todos.map((val: Todo, index: number) =>
        <ItemTodo
          key={val.id}
          todo={val}
          toggelTodo={this.toggleTodo.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
        />) : <p className="no-todo-message">Tidak ada aktifitas, silahkan klik Tambah Aktifitas</p>;
    
    const formAddTodoElement =
      this.state.isFormShow ?
        <FormAddTodo toggleForm={this.toggleFormAddTodo.bind(this)} addTodo={this.addTodo.bind(this)} /> : '';
    
    const sidebarElement = this.state.isSidebarShow ? <Sidebar toggleSidebar={this.toggleSidebar.bind(this)}/> : '';

    return (
      <div>
        {sidebarElement}
        <Header toggleSidebar={this.toggleSidebar.bind(this)}/>
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
