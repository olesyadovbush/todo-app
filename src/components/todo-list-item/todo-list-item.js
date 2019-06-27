import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ label, onDelete, onActivate, commentsAmount }) => {
  return (
    <span className='todo-list-item'>
      <span
        className="todo-list-item-label"
        onClick={onActivate}
      >
        {label}
      </span>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={onDelete}
      >
        Delete
      </button>
    </span>
  );
};

export default TodoListItem;
