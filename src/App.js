import React, { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";


import "./App.css";
import ContactInput from "./components/ContactInput/ContactInput";
import ContactList from "./components/ContactList/ContactsList";

import { nanoid } from "nanoid";
import Filter from "./components/Filter/Filter";
import toast, { Toaster } from "react-hot-toast";



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

          <Toaster />
        </>
      )}
    </>
  );
}
;



export default Phonebook;
