import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import Orders from "./pages/Orders";
import List from "./pages/List";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:4000";
  return (
    <div>
      <Navbar />
        <ToastContainer/>
      <hr className="h-[2px] bg-gray-500" />
      <div className="app-content flex ">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />}></Route>
          <Route path="/orders" element={<Orders url={url} />}></Route>
          <Route path="/list" element={<List url={url} />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
