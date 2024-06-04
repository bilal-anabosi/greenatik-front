import React, { useState } from 'react';
import FormGenerator from './FormGenerator';
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  username: '',
  email: '',
  password: '',
  role: '',
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (userData) => {
    try {
      const { data, status } = await axios.post(`${process.env.REACT_APP_GREENATIK}/user/signup`, userData);
      
      if (status === 201) {
        console.log(data.user);
        toast.success('Signup successful!');
        navigate('/login');
      } else if (status === 401) {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while signing up.');
    }
  };

  const attributes = [
    {
      id: 'name',
      name: 'username',
      label: 'Username',
      type: 'text',
      validation: yup.string().required('Required'),
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email',
      type: 'text',
      validation: yup.string().email('Invalid email').required('Required'),
    },
    {
      name: 'password',
      id: 'password',
      label: 'Password',
      type: 'password',
      validation: yup.string().required('Password is required').min(3, 'Must be at least 3 characters').max(20, 'Maximum length is 20 characters'),
    },
    {
      id: 'role',
      name: 'role',
      label: 'Role',
      type: 'select',
      options: [
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' },
        { value: 'delivery', label: 'Delivery' },
      ],
      validation: yup.string().required('Required'),
    },
    {
      id: 'address',
      name: 'address',
      label: 'Address',
      type: 'text',
      validation: yup.string().required('Required'),
    },
  ];

  return (
    <div>
      <FormGenerator attributes={attributes} onSubmit={onSubmit} />
    </div>
  );
};

export default SignUpForm;
