import React from 'react'
import './Contact.css';

const Contact = ({ firstName, lastName, phone, gender }) => {
  return (
      <table id="contact-wrapper">
        <tbody>
          <tr>
            <td>{gender}</td>
            <td className="contact-info">
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