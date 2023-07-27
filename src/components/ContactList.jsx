

const API_URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";

import {useEffect, useState} from 'react';
import ContactRow from './ContactRow';
const ContactList = () => {

const [contacts, setContacts] = useState([]);



useEffect(() => {
    //create async function 
    const fetchContacts = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        console.log(result);
        setContacts(result);
      
      } catch (error) {
        console.error(error);
        
      }
    }

fetchContacts();

},[]);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} />;
        })}
      </tbody>
    </table>
  );
};
export default  ContactList;