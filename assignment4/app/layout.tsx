import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Student ID Cards',
  description: 'A modern and responsive design for student ID cards',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Layout;
