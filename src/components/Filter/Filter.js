import React from "react";
import s from "./Filter.module.css";
import { addToFilter } from "redux/slices/contactsContacts";
import { useSelector,useDispatch } from "react-redux";

const Filter = () => {
  

  const dispatch= useDispatch()
  const filterInputValue = useSelector((state) => { return state.filter })

  
   
  

  return (
    <label className={s.inputLabel}>
      Find contacts by name
      <input
        onChange={(e)=>{dispatch(addToFilter(e.currentTarget.value))}}
        value={filterInputValue}
        type="text"
        className={s.contactInput}
        name="filter"
        autoComplete="off"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        required
      />
    </label>
  );
};


export default Filter;


