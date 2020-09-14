import React from "react";
import "./App.css";

class List extends React.Component {
  renderGroceries() {
    const { groceries } = this.props;
    return groceries.map((grocery) => {
      return <li key={grocery.id}>{grocery.name}</li>;
    });
  }

  render() {
    return (
      <>
        <h1>Grocery List</h1>
        {this.renderGroceries()}
      </>
    );
  }
}

export default List;
