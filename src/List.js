import React from "react";
import "./App.css";
import Grocery from "./Grocery";

class List extends React.Component {
  renderGroceries() {
    const { groceries } = this.props;
    return groceries.map((grocery) => {
      // return <li key={grocery.id}>{grocery.name}</li>;
      return (
        <Grocery
          itemClick={this.props.itemClick}
          key={grocery.id}
          id={grocery.id}
          name={grocery.name}
          complete={grocery.complete}
        />
      );
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
