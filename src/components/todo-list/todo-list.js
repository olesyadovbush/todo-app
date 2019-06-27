import React, { Component } from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

export default class TodoList extends Component {
  state = {
    activeId: 0,
  }

  makeActiveItem = (id) => {
    this.setState({activeId: id});
    const {onActivate} = this.props;
    onActivate(id);
  }

  render(){
    const { items, onDelete } = this.props;
    const { activeId } = this.state;
    const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className={id === activeId ? "list-group-item active-item" : "list-group-item" }>
        <TodoListItem
          { ...itemProps }
          onDelete={() => onDelete(id)}
          onActivate={() => this.makeActiveItem(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group">{ elements }</ul>
  );
  }
};

