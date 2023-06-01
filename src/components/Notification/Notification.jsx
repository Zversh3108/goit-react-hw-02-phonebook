import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Notification extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.message}</h2>
      </div>
    );
  }
  static propTypes = {
    message: PropTypes.string.isRequired,
  };
}
