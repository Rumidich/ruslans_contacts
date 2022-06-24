import React, { useContext, useEffect, useState } from "react";
import { Box, Container, Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { contactContext } from "../contexts/ContactContext";

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOneContact, oneContact, updateContact } =
    useContext(contactContext);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    getOneContact(id);
  }, []);
  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setSurname(oneContact.surname);
      setPhone(oneContact.phone);
    }
  }, [oneContact]);

  function handleSave() {
    let editedContact = {
      name,
      surname,
      phone,
    };
    updateContact(id, editedContact);
    navigate("/list");
    console.log(editedContact);
  }

  return (
    <Container>
      {oneContact ? (
        <Box>
          <TextField
            value={name}
            onChange={event => setName(event.target.value)}
            label="Outlined"
            variant="outlined"
          />
          <TextField
            value={surname}
            onChange={event => setSurname(event.target.value)}
            label="Outlined"
            variant="outlined"
          />
          <TextField
            value={phone}
            onChange={event => setPhone(event.target.value)}
            label="Outlined"
            variant="outlined"
          />
          <Button onClick={() => handleSave()} variant="outlined">
            Save
          </Button>
        </Box>
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
};

export default EditContact;
