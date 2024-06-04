import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Logout() {
  const navigate = useNavigate();

  const handleCilck = () => {
        localStorage.clear();
        //window.location.reload();
        navigate('/login')
      };

      return (
        <div onClick={handleCilck}>Logout</div>
      )
}