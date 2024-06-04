import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link as RouterLink} from 'react-router-dom';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import ForgetForm from '../Forms/ForgetForm.jsx';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SignInWithGoogle from '../SignInWithGoogle.jsx';

export default function ForgetPage() {

    
    return (
        
        <Container sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            
            gap: 2,
            
        }}>
            <div className='row'>
            <div className=' login col-md-6 '>
            <Stack sx={{
                gap: 2,
                marginTop:'50px'
            }}>
                
               
                <Link component={RouterLink} to='/login' underline='none' sx={{fontSize:'15px' ,color:'black'}}>
                    <ArrowBackIosIcon sx={{fontSize:'15px'}}/>
                    TO LOGIN
                </Link>
                <Typography variant="h3" component="h1">
                    Forget Your Password?
                </Typography>
                
                <Typography variant="body1" gutterBottom style={{color:'#5F6C74', fontSize:'16px'}} >
                    dont worry! happens to all of us. Enter your email below to recovery your password.
                </Typography>

                <ForgetForm/>

                <Divider>
                    OR
                </Divider>
                
                <div style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                <SignInWithGoogle/>
                </div>

                <Typography variant="body2" gutterBottom textAlign='center'>
                    Don&apos;t have an account? 
                    <Link component={RouterLink} to='/sign-up' style={{textDecoration: "none"}}>
                        Sign up
                    </Link>

                </Typography>

            </Stack>
            </div>
            <div className='col-md-6 mt-5 ps-5'>
            <img height={400} width={370} src='./img/man working on a computer.png'/>
            </div>
            </div>
        </Container>
    )
}
