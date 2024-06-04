import FormGenerator from './FormGenerator';
import * as yup from 'yup';
import React, { useState,useContext } from 'react';
import { UserContext } from '../context/User.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function LoginForm() {
  const navigate = useNavigate();
  const { userToken, setUserToken } = useContext(UserContext) || {};
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const onSubmit = async (userData) => {
    try {
      const { data, status } = await axios.post(`http://localhost:4000/user/login`, userData);
      console.log(data);

      if (status === 200) {
        localStorage.setItem('userToken', data.token);
        setUserToken(data.token);
        setSuccessMessage('Login successful! Redirecting...');
        setErrorMessage('');

        if (data.user && data.user.role === 'admin') {
          navigate('/store');
        } else {
          navigate('/store');
        }
      } else if (status === 401) {
        setErrorMessage('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Invalid email or password');
      setSuccessMessage('');
    }
  };

  const attributes = [
    {
      name: 'email',
      id: 'email',
      label: 'Email',
      type: 'text',
      validation: yup.string().email('Invalid email').required('Required'),
    },
    {
      id: 'password',
      name: 'password',
      label: 'Password',
      type: 'password',
      validation: yup.string().required('Password is required').min(3, 'Must be at least 3 characters').max(20, 'Max is 20 characters'),
    },
  ];

  return (
    <div>
      {errorMessage && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {errorMessage}
          <button type="button" className="btn-close" onClick={() => setErrorMessage('')} aria-label="Close"></button>
        </div>
      )}
       {successMessage && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          {successMessage}
          <button type="button" className="btn-close" onClick={() => setSuccessMessage('')} aria-label="Close"></button>
        </div>
      )}
      <FormGenerator onSubmit={onSubmit} attributes={attributes} />
    </div>
  );
}
