import React from "react";
import { useSelector } from "react-redux";


import "./App.css";
import ContactInput from "./components/ContactInput/ContactInput";
import ContactList from "./components/ContactList/ContactsList";


import Filter from "./components/Filter/Filter";




const Phonebook = () => {

  
  const myContacts = useSelector((state) => { return state })
 
  
  return (
    <>
      <ContactInput  />
      {myContacts.contacts.length === 0 ? (
        <p>Please add contacts</p>
      ) : (
        <>
          <h2>Contacts</h2>
          <Filter  />
          <ContactList />

       
        </>
      )}
    </>
  );
}
;



export default Phonebook;
