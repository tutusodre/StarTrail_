import React from "react";
import "./style.scss";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default App;
