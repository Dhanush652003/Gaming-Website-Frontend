import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto py-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', boxShadow: 'none' }}>
      <div className="container text-center">
        <span className="text-white">© 2024 YourCompany. All rights reserved.</span>
        <span className="text-white">Terms of Service</span>
        <span className="text-white">Privacy Policy</span>
        <span className="text-white">Contact Us</span>
      </div>
    </footer>
  );
}

export default Footer;
