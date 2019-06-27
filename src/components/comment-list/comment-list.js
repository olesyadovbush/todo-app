import React from 'react';
import CommentListItem from '../comment-list-item/comment-list-item';
import './comment-list.css';

const CommentList = ({ items }) => {
  const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <CommentListItem
          { ...itemProps }
        />
      </li>
    );
  });

  return (
    <ul className="list-group">{ elements }</ul>
  );
};

export default CommentList;
