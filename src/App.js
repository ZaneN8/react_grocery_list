import React from "react";
import "./App.css";
import List from "./List";
import GroceryForm from "./GroceryForm";

class App extends React.Component {
  state = {
    groceries: [
      { id: 1, name: "Paper Towels", complete: false },
      { id: 2, name: "Cereal", complete: false },
      { id: 3, name: "Soda", complete: false },
    ],
  };

  addItem = (item) => {
    const { groceries } = this.state;
    const newItem = { name: item, id: Math.random(), complete: false };
    this.setState({
      groceries: [newItem, ...groceries],
    });
  };

  render() {
    return (
      <>
        <List groceries={this.state.groceries} />
        <br />
        <GroceryForm add={this.addItem} />
      </>
    );
  }
}

export default App;
