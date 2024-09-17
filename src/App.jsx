import Pnf from "./Pages/Pnf";
import Men from "./Pages/Men";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import About from "./Pages/About.jsx";
import Detail from "./Pages/Detail.jsx";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Women from "./Pages/Women.jsx";
import Vehicle from "./Pages/Vehicle.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Pnf />} />
          <Route path="/" element={<Home />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/view_detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
