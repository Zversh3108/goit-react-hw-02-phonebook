import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, Input } from './SearchContact.Styled';
export class SearchContactByName extends Component {
  render() {
    return (
      <div>
        <Text>{this.props.title}</Text>
        <form>
          <Input
            value={this.props.filter}
            type="text"
            onChange={this.props.onFilterChange}
            placeholder="Search by name"
          />
        </form>
      </div>
    );
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };
}
