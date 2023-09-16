import React, { useEffect, useState } from 'react'
import Contact from './Contact'
import Contacts from './Contacts';
import './ContactList.css';

const ContactList = () => {
  const [contacts, setContacts] = useState(Contacts);
  const [inputValue, setInputValue] = useState("");
  const [checkboxMaleValue, setCheckboxMaleValue] = useState(true);
  const [checkboxFemaleValue, setCheckboxFemaleValue] = useState(true);
  const [checkboxNotPointedValue, setCheckboxNotPointedValue] = useState(true);


  const handleInputValueChange = (e) => {
    const searchName = e.target.value.toLowerCase();
    setInputValue(searchName);

    const filtered = Contacts.filter(
      (contact) =>
        contact.lastName.toLowerCase().includes(searchName) ||
        contact.firstName.toLowerCase().includes(searchName) ||
        contact.phone.includes(searchName)
    );

    applyGenderFilter(filtered);
  };


  const handleCheckboxMaleValueChange = () => {
    setCheckboxMaleValue(!checkboxMaleValue);
  };

  const handleCheckboxFemaleValueChange = () => {
    setCheckboxFemaleValue(!checkboxFemaleValue);
  };

  const handleCheckboxNotPointedValueChange = () => {
    setCheckboxNotPointedValue(!checkboxNotPointedValue);
  };


  const applyGenderFilter = (data) => {
    const filtered = data.filter((contact) => {
      if (!checkboxMaleValue && contact.gender === 'male') {
        return false;
      } else if (!checkboxFemaleValue && contact.gender === 'female') {
        return false;
      } else if (!checkboxNotPointedValue && !contact.gender) {
        return false;
      }
      return true;
    });

    setContacts(filtered);
  };


  useEffect(() => {
    applyGenderFilter(Contacts);
    // eslint-disable-next-line
  }, [checkboxMaleValue, checkboxFemaleValue, checkboxNotPointedValue]);



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

      <div className="checkboxes">
        <div className="checkbox-wrapper">
          <input 
            type="checkbox" 
            id="male" 
            name="male"
            value={checkboxMaleValue}
            checked={checkboxMaleValue}
            onChange={handleCheckboxMaleValueChange}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div className="checkbox-wrapper">
          <input 
            type="checkbox" 
            id="female" 
            name="female"
            value={checkboxFemaleValue}
            checked={checkboxFemaleValue}
            onChange={handleCheckboxFemaleValueChange}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div className="checkbox-wrapper">
          <input 
            type="checkbox" 
            id="notPointed" 
            name="notPointed"
            value={checkboxNotPointedValue}
            checked={checkboxNotPointedValue}
            onChange={handleCheckboxNotPointedValueChange}
          />
          <label htmlFor="notPointed">Not pointed</label>
        </div>
      </div>

      {contacts.map((contact, id) => (
        <Contact {...contact} key={id} />
      ))}

    </div>
  )
}

export default ContactList;