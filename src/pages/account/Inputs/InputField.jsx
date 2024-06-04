/* eslint-disable react/prop-types */
import ChoicesInput from './ChoicesInput';
import DateInput from './DateInput';
import PasswordInput from './PasswordInput';
import TextField from '@mui/material/TextField';

export default function InputField({ type, ...props }) {
    switch(type){
        case 'password':
            return <PasswordInput  {...props} />;
        case 'text':
            return <TextField fullWidth {...props} sx={{
                borderRadius: 2,
            }} />;
        case 'select':
            return <ChoicesInput {...props} />;
        case 'date':
            return <DateInput {...props} />;

        default:
            return null;
    }
}
