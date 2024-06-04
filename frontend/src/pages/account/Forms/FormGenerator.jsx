/* eslint-disable react/prop-types */
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InputField from '../Inputs/InputField.jsx';
import * as yup from 'yup'

export default function FormGenerator({ onSubmit, attributes }) {
    const initialValues = attributes.reduce((acc, attr) => {
        acc[attr.name] = acc[attr['initialValue']] || '';
        return acc;
    }, {});
    
    const schemaObject = attributes.reduce((acc, attr) => {
        acc[attr.name] = attr.validation;
        return acc;
    }, {});
    
    const yupSchema = yup.object().shape(schemaObject);

    return (
        <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={yupSchema}>
            <Form>
                <Stack sx={{
                    gap: 2
                }}>
                    {
                        attributes.map(attr => (
                            <div key={attr.id}>
                                <Field
                                    as={InputField}

                                    name={attr.name}
                                    type={attr.type}
                                    label={attr.label}
                                    {...attr}
                                />
                                <ErrorMessage name={attr.name} component="div" className="error" style={{color:'red'}} />
                            </div>
                        ))
                    }
                    <Button type="submit"
                        variant='contained'
                        color='primary'
                        sx={{
                            color: 'white',
                            py: 2,
                            borderRadius: '10px',
                        }}>
                        Submit
                    </Button>
                </Stack>
            </Form>
        </Formik>
    );
}
