import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",

    password: "",
  });

  // defining useNavigate object

  const navigate = useNavigate();

  // using method of our custom hook useAuth
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(user);
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      // response itself consist of the data that we passed to it from server there we have sent out the token also
      const resData = await response.json();
      console.log("Response from server", resData);
      if (response.ok) {
        

        // calling LocalStorage Function to store token we get from server in local storage
        storeTokenInLS(resData.token);

        toast.success("Logged in successfully");
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        toast.error(resData.extraDetails?resData.extraDetails:resData.message)
        // alert("Invalid cred")
      }
      console.log(response);
    } catch (error) {
      console.log("Error in login handle submit", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/login.png"
                  alt="Nurse filling Registration Form"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main login code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
