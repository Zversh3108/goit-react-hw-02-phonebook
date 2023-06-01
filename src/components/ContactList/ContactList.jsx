import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  Button,
} from 'components/ContactList/ContactList.Styled';
export default class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <div>
        <List>
          {contacts.map(contact => {
            return (
              <ListItem key={contact.id}>
                {contact.name}: {contact.number}
                <Button onClick={() => onDeleteContact(contact.id)}>
                  Delete
                </Button>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };
}
