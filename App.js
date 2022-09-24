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
                    src="data:image/jpeg;base64,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"
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
