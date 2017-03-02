
/* ================================================================================
 *    Import React
 * ================================================================================ */

import React from "react";


/* ================================================================================
 *    Import Component
 * ================================================================================ */

import TodoCreator from "./TodoCreator";
import TodoList    from "./TodoList";


/* ================================================================================
 *    Define Component
 * ================================================================================ */

export default class TodoApp extends React.Component {

  constructor() {
    super();
    this.state = { todos: [] };
    this.onAdd        = this.onAdd.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  onAdd(newTodo) {
    this.state.todos.push({ item: newTodo, status: 0 });
    this.setState({ todos: this.state.todos });
  }

  changeStatus(key, status) {
    let targetTodo = this.state.todos[key];
    targetTodo.status = status;
    this.setState({ todos: this.state.todos });
  }

  render() {
    return (
      <div className="todoApp">
        <TodoCreator onAdd={this.onAdd} />
        <TodoList todos={this.state.todos} changeStatus={this.changeStatus} />
      </div>
    );
  }

}