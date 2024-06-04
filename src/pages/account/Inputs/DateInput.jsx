/* eslint-disable react/prop-types */
// DateInput.jsx
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useFormikContext } from 'formik';

export default function DateInput({name,value,isValid,...props}) {  
    const { setFieldValue } = useFormikContext(); 

    const handleChange = (date) => {
    setFieldValue(name, date.toISOString());
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                sx={{ width: '100%' }}
                {...props}
                onChange={handleChange}
            />
        </LocalizationProvider>
    );
}
