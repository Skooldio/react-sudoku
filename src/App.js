import React, { Component } from "react";
import "./App.css";
import Cell from "./Cell";

class App extends Component {
  state = {
    board: [[1, 2, 3, 4], [3, 4, 0, 0], [2, 0, 4, 0], [4, 0, 0, 2]],
    initialFlags: [
      [true, true, true, true],
      [true, true, false, false],
      [true, false, true, false],
      [true, false, false, true]
    ],
    complete: false,
    invalid: false
  };
  handleClick = (i, j, number) => {
    console.log(i, j, number);
  };
  render() {
    return (
      <div className="App">
        <div className="board">
          {this.state.board.map((row, i) =>
            row.map((cell, j) => (
              <Cell
                key={`cell-${i}-${j}`}
                onClick={() => this.handleClick(i, j, cell)}
                number={cell}
                isInitial={this.state.initialFlags[i][j]}
              />
            ))
          )}
        </div>
        {this.state.complete && <p>Board is complete!</p>}
        {this.state.invalid && <p>Board is invalid!</p>}
      </div>
    );
  }
}

export default App;
