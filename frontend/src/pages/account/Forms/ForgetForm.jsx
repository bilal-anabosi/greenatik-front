import FormGenerator from './FormGenerator';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';

export default function ForgetForm() {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
  }

  const onSubmit = async (userData) => {
    try {
      const { data,status } = await axios.patch(`http://localhost:4000/user/sendcode`, userData);
      console.log(data);

      if (status === 200) {
        console.log(data.user)

        navigate('/set-password');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  const attributes = [
    {
      name: 'email',
      id: 'email',
      label: 'email',
      type: 'text',
      validation: yup.string().email('Invalid email').required('Required'),
    },
  ];


  return <FormGenerator onSubmit={onSubmit} attributes={attributes}  />;

}
