import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }, props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
