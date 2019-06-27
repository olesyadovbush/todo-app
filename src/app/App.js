import React, { Component } from 'react';
import TodoList from '../components/todo-list';
import ItemAddForm from '../components/item-add-form';
import CommentList from '../components/comment-list';
import CommentAddForm from '../components/comment-add-form';
import './App.css';

export default class App extends Component {

  maxId = 100;

  state = {
    items: [],
    activeId: 0,
    comments: [],
  };

  componentWillMount(){
    this.getItemsFromStorage();
  }

  getItemsFromStorage = () => {
    const itemsKeys = Object.keys(localStorage).filter(itemKey => itemKey.includes('item'));
    const items = itemsKeys.map(el => JSON.parse(localStorage.getItem(el)));
    this.setState({items});
}

  onCommentAdded = (comment) => {
    const {activeId} = this.state;
    this.setState((state) => {
      const item = {
        id: Math.random(),
        label: comment,
      };
      localStorage.setItem(Math.random() + '_comment_' + activeId, JSON.stringify(item));
      return { comments: [...state.comments, item] }
    })
  }

  onItemAdded = (label) => {
    this.setState((state) => {
      const item = this.createItem(label);
      localStorage.setItem('item_' + item.id, JSON.stringify(item));
      return { items: [...state.items, item] };
    })
  };

  onDelete = (id) => {
    const keysToDelete = Object.keys(localStorage).filter(itemKey => itemKey.includes(id));
    keysToDelete.map(key => localStorage.removeItem(key));
    this.setState((state) => {
      const idx = state.items.findIndex((item) => item.id === id);
      const items = [
        ...state.items.slice(0, idx),
        ...state.items.slice(idx + 1)
      ];
      return { items, activeId: 0 };
    });
  };

  createItem(label) {
    return {
      id: ++this.maxId,
      label,
    };
  }

  render() {
    const { items, activeId } = this.state;
    const currentComments = Object.keys(localStorage)
      .filter(key => key.includes('_comment_' + activeId))
      .map(key => JSON.parse(localStorage.getItem(key)));

    return (
      <div className="flex-wrapper">
        <div className="side-bar">
          <header className="diary-header">Diary App</header>
          <span className="font-weight-light comment-title">Comment with no sense</span>
        </div>
        <div className="flex-wrapper main-block">
          <div className="white-wrapper">
            <h2>Items</h2>
            <ItemAddForm
              onItemAdded={this.onItemAdded} />
            <TodoList
              items={ items }
              onDelete={this.onDelete}
              onActivate = {activeId => this.setState({activeId})}
            />
          </div>
          <div className="white-wrapper">
            <h2>Comments #{activeId}</h2>
            <CommentList
              items={currentComments}
            />
            <CommentAddForm
              onCommentAdded={this.onCommentAdded}
              enable={activeId === 0 ? false : true}
            />
          </div>
        </div>
      </div>
    );
  };
}

