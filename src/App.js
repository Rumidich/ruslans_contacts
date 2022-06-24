import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact/AddContact";
import ContactsList from "./components/ContactsList/ContactsList";
import ContactContextProvider from "./components/contexts/ContactContext";
import EditContact from "./components/EditContact/EditContact";
import Header from "./components/Navbar/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ContactContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ContactsList />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/list" element={<ContactsList />} />
          <Route path="edit/:id" element={<EditContact />} />
        </Routes>
      </BrowserRouter>
    </ContactContextProvider>
  );
}

export default App;
