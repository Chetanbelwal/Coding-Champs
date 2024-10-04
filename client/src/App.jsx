import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { Error } from "./pages/Error";
import { Navbar } from "./components/Navbar";
import { Service } from "./pages/Service";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { AdminLayout } from "./components/layouts/Admin-Layout";
import {AdminUsers} from "./pages/Admin-Users"
import {AdminContacts} from "./pages/Admin-Contacts"


import "./App.css";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar /> {/* Navbar will be applied to all routes */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/registration" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>

          {/* Using Nested Loop for Admin */}
          <Route path="/admin" element = {<AdminLayout/>}>
              <Route path="users" element = {<AdminUsers/>}></Route>
              <Route path="contacts" element = {<AdminContacts/>}></Route>
          </Route>

          {/* If any route other than above is visited we will redirect user to error 404 page */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
