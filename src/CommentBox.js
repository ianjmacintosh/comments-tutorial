import React, { Component } from 'react';

class CommentList extends Component {
  render() {
    return (
      <div className="commentList">
        Hello world! I am a CommentList.
      </div>
    );
  }
}

class CommentForm extends Component {
  render() {
    return (
      <div className="commentForm">
        Bonjour monde! Je suis un CommentForm!
      </div>
    );
  }
}

class CommentBox extends Component {
  render() {
    return (
      <div className="commentBox">
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}

export default CommentBox;
