import { useState } from "react";

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const handleInput = () => {
    console.log("Clicked on handleInput");
  };

  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">User Data</h1>
      </div>

      <div className="container grid grid-two-cols">
        <section className="section-form">
          <form>
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
