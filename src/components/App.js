import React, { PropTypes } from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header here...</p>
        {this.props.children}

      </div>
    );
  }
}

App.props = {
  children: PropTypes.object.isRequired
}
