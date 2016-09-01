import React, { Component } from 'react';

class CommentList extends Component {
  render() {
    return (
      <div className="commentList">
        Hello world! I am a CommentList.
      </div>
      /*
        > The <div> tags are not actual DOM nodes; they are instantiations of React div components.
        You can think of these as markers or pieces of data that React knows how to handle.
        React is safe. We are not generating HTML strings so XSS protection is the default.

        [Source](https://facebook.github.io/react/docs/tutorial.html#whats-going-on)
      */
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
      /*
        > You do not have to return basic HTML.
        You can return a tree of components that you (or someone else) built.
        This is what makes React composable: a key tenet of maintainable frontends.

        [Source](https://facebook.github.io/react/docs/tutorial.html#whats-going-on)

        Here we can see I am calling my own CommentList and CommentForm components. RADICAL.

        I expect there is a native Div component. Maybe the React naming convention dictates native
        components have a lowercase first letter? The official tutorial says these are React div
        components, although their "JSX in Depth" page says JSX can render components or HTML:

        > To render an HTML tag, just use lower-case tag names in JSX

        [Source](https://facebook.github.io/react/docs/jsx-in-depth.html#html-tags-vs.-react-components)

        One thing I learned by reading up a little of the [official documentation](https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html)
        while trying to clear up this topic is one of React's core concepts is that an element (as
        in "a React element," not an HTML element) is that it a description of an object, not the
        actual instance or markup. One day a DangerButton could be a <button>, the next day it could
        be an <a> tag, and the next day, maybe it's something really cool that I don't even know about.

        All that to say this: That part on line 10 ("The <div> tags are not actual DOM nodes") is a little
        confusing. It's a React element until it gets parsed, at which point it is rendered as a plain old
        div tag. I don't get the impression React has a <div> tag defined, but what the documentation was
        trying to say is that it isn't an HTML tag until React parses the component tree.
      */
    );
  }
}

export default CommentBox;
