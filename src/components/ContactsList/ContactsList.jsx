import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { contactContext } from "../contexts/ContactContext";

const ContactsList = () => {
  const { getContacts, contacts, deleteContact } = useContext(contactContext);
  const navigate = useNavigate();

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}>
      {contacts.map(item => (
        <div
          className="result_table"
          key={item.id}
          style={{
            flexDirection: "row",
            display: "flex",
            margin: "3px 20px",
          }}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.phone}</td>
              </tr>
            </tbody>
          </table>
          <button
            style={{
              borderRadius: "8px",
              backgroundColor: "lime",
              border: "none",
              marginLeft: "5px",
            }}
            onClick={() => navigate(`/edit/${item.id}`)}>
            Edit
          </button>
          <button
            style={{
              borderRadius: "8px",
              backgroundColor: "fuchsia",
              border: "none",
              marginLeft: "5px",
            }}
            onClick={() => deleteContact(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactsList;
