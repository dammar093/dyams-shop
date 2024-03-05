import React from "react";
import TopNav from "../top-nav/TopNav";
import { Outlet } from "react-router-dom";
import BottomNav from "../bottom-nav/BottomNav";
import Footer from "../footer/Footer";
import ScrollTop from "../../scroll-top/ScrollTop";
const Layout = () => {
  return (
    <>
      <TopNav />
      <BottomNav />
      <ScrollTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
