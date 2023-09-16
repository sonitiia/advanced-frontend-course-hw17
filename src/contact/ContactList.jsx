import React, { useState } from 'react'
import Contact from './Contact'
import Contacts from './Contacts';
import './ContactList.css';

const ContactList = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(Contacts);

  const handleInputValueChange = (e) => {
    const searchName = e.target.value.toLowerCase();
    setInputValue(searchName);

    const filtered = Contacts.filter(contact => contact.lastName.toLowerCase().includes(inputValue) 
    || contact.firstName.toLowerCase().includes(searchName));
    setFilteredContacts(filtered);
  }



  return (
    <div className="contact-list-wrapper">
      <h2 className="contacts">Contacts</h2>
      <input 
        id="input-search"
        type="text"
        placeholder='Search contacts'
        value={inputValue}
        onChange={handleInputValueChange}
      />
      {filteredContacts.map((contact, id) => (
        <Contact {...contact} key={id} />
      ))}
    </div>
  )
}

export default ContactList;