import './Main.css';

import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    newTask: ''
  }

  handleChange = (event) => {
    this.setState({
      newTask: event.target.value
    });
  }

  render() {
    const { newTask } = this.state;

    return (
      <div className="main">
        <h1>Todo List</h1>

        <form action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={newTask}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}
