import { createSlice } from "@reduxjs/toolkit";

const contactsFromLocalStorage = JSON.parse(localStorage.getItem("contacts"));


 



const contactsSlice = createSlice({name:`contacts`,
initialState:contactsFromLocalStorage??[],
    reducers: {
        contactAdd: (state, action) => {
            if (state.map(el => el.name).includes(action.payload.name)) { alert(`${action.payload.name} is already in contacts `) } else {
                state.push(action.payload);
                localStorage.setItem("contacts", JSON.stringify(state))}  },
        contactDelete: (state, action) => {
            
            state = state.filter(contact => contact.name !== action.payload); localStorage.setItem("contacts", JSON.stringify(state));
            return state

            
        
        }
    }
})

const filterSlice = createSlice({name:`filter`,
initialState:'',
reducers:{addToFilter:(state,action)=>{return action.payload}}})



export const { contactDelete, contactAdd } = contactsSlice.actions
export const {addToFilter}=filterSlice.actions
export {contactsSlice,filterSlice}