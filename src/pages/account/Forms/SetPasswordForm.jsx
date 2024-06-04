import FormGenerator from './FormGenerator';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import React, { useState } from 'react';


const SetPasswordForm = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (userData) => {
    try {
      const { data,status } = await axios.patch(
        `${process.env.REACT_APP_GREENATIK}/user/forgetpassword`,
        userData
      );
      console.log(data);
      if (status === 200) {
        
        if (data.user && data.user.role === 'admin') { // Check if user object exists
          navigate('/all-posts');
        } else {
          navigate('/store');
        }
      }
    } catch (error) {
      console.error('Error during password update:', error);
      setErrorMessage('Invalid code');
    }
  };


  const attributes = [
    {
      id: 'email',
      name: 'email',
      label: 'Email',
      type: 'text',
      validation: yup.string().email('Invalid email').required('Required'),
    },
    {
      id: 'password',
      name: 'password',
      label: 'Enter new password',
      type: 'password',
      validation: yup.string().required('Password is required').min(3, 'Must be at least 3 characters').max(20, 'Maximum length is 20 characters'),
    },
    {
      id: 'verify-code',
      name: 'code',
      label: 'Verify code',
      type: 'text',
      validation: yup.string().required('Code is required').min(4, 'Must be at least 4 characters').max(5, 'Maximum length is 5 characters'),
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
       
      <FormGenerator onSubmit={onSubmit} attributes={attributes} />
    </div>
  );
};

export default SetPasswordForm;
