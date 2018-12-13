import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    board: [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]
  };
  render() {
    return (
      <div className="App">
        <div className="board">
          {this.state.board.map(row =>
            row.map(cell => <div className="cell">{cell}</div>)
          )}
        </div>
        {this.state.error && <p>Error!</p>}
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
