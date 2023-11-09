import React from 'react';


const StickyFooter = ({ children }) => {
  return (
    <footer className="sticky-footer">
      {children}
    </footer>
  );
};

export default StickyFooter;
