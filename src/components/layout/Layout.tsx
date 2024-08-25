import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
