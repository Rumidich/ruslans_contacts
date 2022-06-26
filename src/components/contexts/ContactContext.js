import React, { createContext, useReducer } from "react";
import axios from "axios";
export const contactContext = createContext();

const INIT_STATE = {
  contacts: [],
  oneContact: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "GET_ONE_CONTACT":
      return { ...state, oneContact: action.payload };
    default:
      return state;
  }
};
//! CRUD - Create, Read, Update, Delete
const ContactContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const API = "http://localhost:8001/contacts";

  //! Create
  async function createContact(newContact) {
    await axios.post(API, newContact);
    getContacts();
  }
  //! Read
  async function getContacts() {
    let res = await axios(API);
    dispatch({
      type: "GET_CONTACTS",
      payload: res.data,
    });
  }

  //! Delete
  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  //! Get one of the Contacts to edit
  async function getOneContact(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_CONTACT",
      payload: res.data,
    });
  }
  //! Update - Editing/updating one of the Contacts
  async function updateContact(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
    getContacts();
  }

  async function saveContact(newContact) {
    await axios.patch(`${API}/${newContact.id}`, newContact);
  }

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        oneContact: state.oneContact,
        createContact,
        getContacts,
        getOneContact,
        deleteContact,
        updateContact,
        saveContact,
      }}>
      {children}
    </contactContext.Provider>
  );
};

export default ContactContextProvider;
