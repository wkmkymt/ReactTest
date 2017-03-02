
/* ================================================================================
 *    Import React
 * ================================================================================ */

import React from "react";


/* ================================================================================
 *    Define Component
 * ================================================================================ */

export default class TodoCreator extends React.Component {

  constructor() {
    super();
    this.state = { value: "" };
    this._onAdd = this._onAdd.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  _onAdd() {
    this.props.onAdd(this.state.value);
    this.setState({ value: "" });
  }

  _onChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="TodoCreator">
        <input type="text" value={this.state.value}
               placeholder="Input new todo" onChange={this._onChange} />
        <button onClick={this._onAdd}>Add</button>
      </div>
    );
  }

}