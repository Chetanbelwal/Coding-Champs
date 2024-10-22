import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const AdminContacts = () => {
  const { authorizationToken } = useAuth();
  const [contact, setContact] = useState([]);

  const getAllContactData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      setContact(data);
      console.log("Contact Data:", data);
    } catch (error) {
      console.log(error);
    }
  };

   //   Function which will Trigger when user will click on Delete Button
   const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (response.ok) {
        console.log("Contact deleted successfully");
        getAllContactData();
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getAllContactData();
  }, []);

  return (
    <section className="admin-users-section">
      <div className="container">
        <h1>Admin Contact Data</h1>
      </div>
      <div className="container admin-users">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {contact && contact.length > 0 ? (
              contact.map((curContact, index) => {
                return (
                  <tr key={index}>
                    <td>{curContact.username}</td>
                    <td>{curContact.email}</td>
                    <td>{curContact.message}</td>
                    <td>
                      <button onClick={() => deleteContact(curContact._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5">No Contact found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
