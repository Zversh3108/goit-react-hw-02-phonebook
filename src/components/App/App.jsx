import React, { Component } from 'react';
import AddContactForm from '../AddContactForm/AddContactForm';
import ContactList from '../ContactList/ContactList';
import Notification from '../Notification/Notification';
import { SearchContactByName } from '../SearchContact/SearchContact';
import { Container } from './App.Styled';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  addContact = newContact => {
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();

    if (normalizedFilter === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
  
    const filteredContacts = this.filterContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <AddContactForm
          addContact={this.addContact}
          onChange={this.handleChange}
        />
        <h2>Contacts</h2>
        <SearchContactByName
          title="Find contact by name"
          onFilterChange={this.handleFilterChange}
        />
        {filteredContacts.length > 0 ? (
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        ) : (
          <Notification
            message="
          No name found with this name."
          />
        )}
      </Container>
    );
  }
}
