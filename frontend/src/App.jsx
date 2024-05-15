import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Error from "./pages/error/Error";
import LoginPopup from "./components/LoginPopup";
import Placeholder from "./pages/placeholder/Placeholder";
import  ContactUs from "./pages/contactUs/contactUs";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="max-w-[1200px] mx-auto px-4">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeholder />} />
          <Route path="*" element={<Error />} />
          <Route path="/contactUs" element={<ContactUs/>}/>
        </Routes>
        <Footer />
        {/* <Example /> */}
      </div>
    </>
  );
};

export default App;
