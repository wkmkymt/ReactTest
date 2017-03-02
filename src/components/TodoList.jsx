
/* ================================================================================
 *    Import React
 * ================================================================================ */

import React from "react";


/* ================================================================================
 *    Define Component
 * ================================================================================ */

export default class TodoList extends React.Component {

  constructor() {
    super();
    this._changeStatus = this._changeStatus.bind(this);
  }

  _changeStatus(key, status) {
    this.props.changeStatus(key, !status);
  }

  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo, index) => {
            let todoItem;
            if(todo.status)
              todoItem = <span><s>{todo.item}</s></span>;
            else
              todoItem = <span>{todo.item}</span>;

            return (
              <li key={index}>
                <input type="checkbox" id={"cbox-" + index}
                       onClick={this._changeStatus.bind(this, index, todo.status)} />
                <label htmlFor={"cbox-" + index}>{todoItem}</label>
              </li>
            );
          })
        }
      </ul>
    );
  }

}