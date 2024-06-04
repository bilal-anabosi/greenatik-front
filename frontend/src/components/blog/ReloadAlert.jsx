import React, { useEffect } from 'react';

const ReloadAlert = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; // to output the message
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); // Empty dependency array means that the effect will only run once, when the component mounts

  return null; 
};

export default ReloadAlert;