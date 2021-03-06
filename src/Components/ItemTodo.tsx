import React, { Component } from 'react'
import { Todo } from '../App'

interface Props {
  todo: Todo;
  toggelTodo: (id: number) => any;
  deleteTodo: (id: number) => any;
}

export default class ItemTodo extends Component<Props, {}> {
  render() {
    const { id, content, isDone } = this.props.todo;

    const checkElement = isDone ? (
      <div className="todo__item__check">
        <svg xmlns="http://www.w3.org/2000/svg" width="23.654" height="15.259" viewBox="0 0 23.654 15.259">
          <path id="check-done" d="M47.372,465.464l8.748,8.748,14.2-14.2" transform="translate(-47.018 -459.66)" fill="none" stroke="#4b4b4b" strokeWidth="1" />
        </svg>
      </div>
    ) : '';

    return (
      <section className={"todo" + (isDone ? " todo--done" : "")}>
        <div className="todo__item" onClick={() => this.props.toggelTodo(id)}>
          {checkElement}
          <div className="circle"></div>
          <div className="todo__item__content">
            <p>{content}</p>
          </div>
        </div>
        <div className="todo__trash" onClick={() => this.props.deleteTodo(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16.474" height="17.972" viewBox="0 0 16.474 17.972">
            <g id="trash-can" transform="translate(-1)">
              <path id="Path_1" data-name="Path 1" d="M16.912,7.118H1.562A.562.562,0,0,1,1,6.557v-1.5A2.061,2.061,0,0,1,3.059,3H15.415a2.061,2.061,0,0,1,2.059,2.059v1.5A.562.562,0,0,1,16.912,7.118Z" transform="translate(0 -0.754)" fill="#d90000" />
              <path id="Path_2" data-name="Path 2" d="M3,9.5v8.8a2.061,2.061,0,0,0,2.059,2.059h9.36A2.061,2.061,0,0,0,16.479,18.3V9.5Zm4.306,7.863a.749.749,0,0,1-1.5,0V11.746a.749.749,0,0,1,1.5,0Zm3.182,0a.749.749,0,0,1-1.5,0V11.746a.749.749,0,0,1,1.5,0Zm3.182,0a.749.749,0,1,1-1.5,0V11.746a.749.749,0,1,1,1.5,0Z" transform="translate(-0.502 -2.386)" fill="#d90000" />
              <path id="Path_3" data-name="Path 3" d="M13.991,1.5V1.31A1.312,1.312,0,0,0,12.68,0H9.31A1.312,1.312,0,0,0,8,1.31V1.5Z" transform="translate(-1.758)" fill="#d90000" />
            </g>
          </svg>
        </div>
      </section>
    )
  }
}
