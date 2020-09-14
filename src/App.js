import React from "react";
import "./App.css";
import List from "./List";

class App extends React.Component {
  state = {
    groceries: [
      { id: 1, name: "Paper Towels", complete: false },
      { id: 2, name: "Cereal", complete: false },
      { id: 3, name: "Soda", complete: false },
    ],
  };

  render() {
    return (
      <>
        <List groceries={this.state.groceries} />
      </>
    );
  }
}

export default App;
