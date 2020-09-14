import React from "react";

class GroceryForm extends React.Component {
  state = { item: "" };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.item);
    this.props.add(this.state.item);
    this.setState({ item: "" });
  };

  handleChange = (event) => {
    this.setState({ item: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          required
          value={this.state.item}
          onChange={this.handleChange}
          placeholder="Add To List"
        />
      </form>
    );
  }
}

export default GroceryForm;
