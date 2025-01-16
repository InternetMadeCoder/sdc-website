"use client"

import { useEffect } from 'react';

const Popup = ({ children }) => {

  useEffect(() => {
    // Disable scrolling on the main page when the popup is open
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the popup is closed
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-full z-50 flex flex-col justify-center items-center bg-black bg-opacity-50'>
      <div className='m-4 bg-white p-8 rounded-lg max-w-7xl max-h-[620px] relative overflow-y-auto'>
        {children}
      </div>
    </div>
  );
};

export default Popup;
