import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox.js';
import './index.css';

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />, // Why does wrapping in {}'s pass this as a Number?
  document.getElementById('root')
);
