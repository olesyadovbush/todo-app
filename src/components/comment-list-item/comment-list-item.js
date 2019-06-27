import React from 'react';
import './comment-list-item.css';
import Orange from '../../images/orange.jpg'

const CommentListItem = ({ label }) => {
    return (
      <span className='todo-list-item'>
        <img
          className="img-orange"
          src={Orange}
          alt=""
        />
        <span
          className="todo-list-item-label little"
        >
          {label}
        </span>
      </span>
    );
  };
export default CommentListItem;
