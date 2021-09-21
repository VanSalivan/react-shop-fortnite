import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  el = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export { Modal };
