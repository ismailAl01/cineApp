import React, { ReactNode } from 'react';
import Header from '@/shared/components/Layout/Header';
import Footer from '@/shared/components/Layout/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='main__layout'>
      <Header />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
