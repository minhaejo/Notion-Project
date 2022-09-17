import React, { FC } from "react";
import Footer from "./footerCompo/Footer";
import Header from "./headerCompo/Header";

interface props {
  children: React.ReactNode;
}

const Layout: FC<props> = ({ children }) => {
  return (
    <div className="bg-primary">
      <Header />

      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
