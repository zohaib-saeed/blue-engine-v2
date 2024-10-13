import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    //@ts-ignore
    window.dataLayer = window.dataLayer || [];
    //@ts-ignore
    window.dataLayer.push({
      event: "pageview",
      page: location.pathname,
    });
  }, [location]);

  return (
    <div className="w-full flex flex-col items-center justify-start">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
