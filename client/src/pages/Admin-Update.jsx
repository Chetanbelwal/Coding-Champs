import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  const params = useParams();
  const { authorizationToken , API} = useAuth();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data, // Spread the existing data to preserve other fields
      [name]: value, // Dynamically update the specific field
    });
  };

  //   Function which will show user data
  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `${API}/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const fetchedData = await response.json();
      setData(fetchedData);
      console.log("Users fetched data:", fetchedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  // Function that handle when form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${API}/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            // indicates that the body of the request contains JSON data.
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },

          // When making HTTP requests, specifically POST, PUT, or PATCH requests, we often need to send data to the server in the form of JSON. Servers usually expect the request body to be in JSON format, not as a plain JavaScript object.
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("User Updated successfully");
        toast.success("User Updated successfully");
        navigate("/admin/users");
      } else {
        toast.error("User Updation Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">User Data</h1>
      </div>

      <div className="container grid grid-two-cols">
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                value={data.username}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={data.email}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="phone">Mobile</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                autoComplete="off"
                value={data.phone}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <button type="submit">Update</button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};
