import React from 'react'
import './Contact.css';
import { faMinus, faPerson, faPersonDress } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = ({ firstName, lastName, phone, gender }) => {
  return (
      <table id="contact-wrapper">
        <tbody>
          <tr>
            <td>
              {
                gender === "male"
                ? <FontAwesomeIcon icon={faPerson} size="lg" /> 
                : (
                  gender === "female"
                  ? <FontAwesomeIcon icon={faPersonDress} size="lg" /> 
                  : <FontAwesomeIcon icon={faMinus} size="sm" /> 
                )
              }
            </td>
            <td>
              <div>
                <strong>{firstName} {lastName}</strong>
                <p>{phone}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
  )
}

export default Contact;