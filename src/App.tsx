import React, { Component } from 'react'
import Header from './Components/Header'
import ItemTodo from './Components/ItemTodo'

interface Props {
  
}
interface State {
  
}

export default class App extends Component<Props, State> {
  state = {}

  render() {
    const todoElementsTsx = [1, 2, 3, 4, 5].map((val: any, index: number) => <ItemTodo key={index}/>)

    return (
      <div>
        <Header />
        <div id="todos">
          {todoElementsTsx}
        </div>
      </div>
    )
  }
}
