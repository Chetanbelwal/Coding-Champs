import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { Error } from "./pages/Error";
import { Navbar } from "./components/Navbar";
import { Service } from "./pages/Service";
import { Login } from "./pages/Login";

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
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>

          {/* If any route other than above is visited we will redirect user to error 404 page */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
