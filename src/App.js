import React from "react";
import "./styles.css";
import styled from "styled-components";

const Remove = styled.button`
  background-color: transparent;
  border: none;
`;

export default class ToDo extends React.Component {
  state = { task: "", taskList: [] };

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  handleClick = (e) => {
    if (this.state.task !== "") {
      this.setState({
        taskList: this.state.taskList.concat({
          task: this.state.task,
          id: Date.now()
        }),
        task: ""
      });
    }
    e.preventDefault();
  };

  handleRemove = (id) => {
    this.setState({
      taskList: this.state.taskList.filter((item) => {
        return item.id !== id;
      })
    });
  };

  render() {
    return (
      <div className="container">
        <h1>
          <h2>Lista de Tarefas!.♥</h2>
          <form className="container2">
            <input onChange={this.handleChange} value={this.state.task} />
            <button onClick={this.handleClick} className="box-button">
              Add
            </button>
          </form>
          <ul>
            {this.state.taskList.map((item) => (
              <li>
                {item.task} {""}
                <Remove
                  onClick={() => {
                    this.handleRemove(item.id);
                  }}
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/18/18297.png"
                    alt="lixo"
                  />
                </Remove>
              </li>
            ))}
          </ul>
        </h1>
      </div>
    );
  }
}
