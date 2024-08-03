import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";

import { Navbar } from "./components/Navbar";
import { Service } from "./pages/Service";
import { Login } from "./pages/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar /> {/* Navbar will be applied to all routes */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
