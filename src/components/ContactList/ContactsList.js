import React from "react";
import s from "./ContactList.module.css";

import { contactDelete } from "redux/slices/contactsContacts";
import { useSelector,useDispatch } from "react-redux";


const ContactList = () => {

  const dispatch= useDispatch()
  const contacts = useSelector((state) => { return state })

  

   const filtredContacts = contacts.filter!==""?contacts.contacts.filter(cont=>cont.name.toLowerCase().includes((contacts.filter).toLowerCase())):contacts.contacts
  
  
  
  return (
    
    <div>
            <ul>
        {filtredContacts.map((contact) => {
          return (
            <li className={s.contactListItem} key={contact.name}>
              <span>{contact.name}:</span>
              <span> {contact.number}</span>
              <button
                className={s.deleteButton}
                type="button"
                 onClick={()=>{dispatch(contactDelete(contact.name))}}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
      <span></span>
    </div>
  );
};

export default ContactList;

