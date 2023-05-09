import React, { Component } from "react";
import "./todoapp.css";

export default class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };
  handlchange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  storeItems = (e) => {
    e.preventDefault();
    const { input } = this.state;
    // const allitems = this.state.items;

    // allitems.push(input);
    this.setState({
      // items:allitems
      items: [...this.state.items, input],
      input: "",
    });
  };
  deleteItem = (key) => {
    // const allitems = this.state.items;
    // allitems.splice(key, 1);
    this.setState({
    //   items: allitems,
      items: this.state.items.filter((data,index)=>index !== key),
    });
  };
  render() {
    const { input, items } = this.state;

    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>Todo App</h1>

          <input
            type="text"
            value={input}
            onChange={this.handlchange}
            placeholder="Enter Items.."
          />
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <i
                className="fa-regular fa-trash-can"
                onClick={() => this.deleteItem(index)}
                style={{ color: "#b5b5b5" }}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
