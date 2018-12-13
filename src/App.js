import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    board: [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]],
    complete: true,
    invalid: false
  };
  render() {
    return (
      <div className="App">
        <div className="board">
          {this.state.board.map(row =>
            row.map(cell => <div className="cell">{cell}</div>)
          )}
        </div>
        {this.state.complete && <p>Board is complete!</p>}
        {this.state.invalid && <p>Board is invalid!</p>}
      </div>
    );
  }
}

export default App;
