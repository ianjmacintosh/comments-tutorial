import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox.js';
import './index.css';

ReactDOM.render(
  <CommentBox url="/api/comments" />,
  document.getElementById('root')
);
