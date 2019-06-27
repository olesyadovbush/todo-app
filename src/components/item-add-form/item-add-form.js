import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { label } = this.state;
    const { onItemAdded } = this.props;
    this.setState({ label: '' });
    const cb = onItemAdded || (() => {});
    cb(label);
  };

  render() {
    return (
      <form
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}>

        <input type="text"
          className="form-control new-todo-label"
          value={this.state.label}
          onChange={this.onLabelChange}
          placeholder="Type name here..."
        />

        <button type="submit"
          className="btn btn-info">Add new</button>
      </form>
    );
  }
}
