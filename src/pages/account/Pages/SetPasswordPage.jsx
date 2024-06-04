import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SetPasswordForm from '../Forms/SetPasswordForm.jsx';
import Link from '@mui/material/Link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link as RouterLink} from 'react-router-dom';

export default function SetPasswordPage() {
    return (
        
        <Container sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
         
            gap: 2
        }}>
            
            <div className='row'>
            <div className=' login col-md-6'>
            <Stack sx={{
                gap: 2,
                marginTop:'50px'
            }}>

                <Link component={RouterLink} to='/login' underline='none' sx={{fontSize:'15px', color:'black'}}>
                    <ArrowBackIosIcon sx={{fontSize:'15px'}}/>
                    TO LOGIN
                </Link>

                <Typography variant="h3" component="h1" >
                    Set a password
                </Typography>
                
                <Typography variant="body1" gutterBottom style={{color:'#5F6C74', fontSize:'16px'}}>
                    your previous password has been reset. Please enter a new password.
                </Typography>

                <SetPasswordForm/>
            </Stack>
            </div>
            <img  src='./img/man sitting and showing a heart with his arms.png' className='col-md-6 mt-5 ps-5'/>
            </div>
        </Container>
    )
}
