import React, { Component } from 'react';
import './comment-add-form.css';
import Gray from '../../images/gray.jpg'

export default class CommentAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  keydownHandler(e){
    const { onCommentAdded } = this.props;
    if(e.keyCode===13 && e.ctrlKey){
      const { label } = this.state;
      onCommentAdded(label);
      this.setState({ label: ''});
    }     
  };

  render() {
    const { label } = this.state;
    const { enable } = this.props;
    return (
      <div style={enable ? {} : {display: 'none'}} >
      <form
        className="bottom-panel d-flex">
        <img
            className="img-gray"
            src={Gray}
            alt=""
        />
        <textarea
          type="text"
          className="form-control new-todo-label new-comment-block"
          placeholder="Enter Ctrl+Enter to send..."
          value={label}
          onChange={this.onLabelChange}
          onKeyDown={e => this.keydownHandler(e)}
        />
      </form>
      </div>
    );
  }
}