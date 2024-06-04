import Container from '@mui/material/Container';
import SignUpForm from '../Forms/SignUpForm.jsx';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link as RouterLink} from 'react-router-dom';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import SignInWithGoogle from '../SignInWithGoogle.jsx';
import './Pages.css'


export default function SignUpPage() {
    return (
        
        <Container sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            
            gap: 2,
            
        }}>
            <div className="row">

            
            <img height={500} width={370} src='./img/Group 2.png' className='col-md-6 mt-5 pe-5' />
            
            
            <div className='  col-md-6'>
            <Stack sx={{
                gap: 2,
                marginTop:'50px'
            }}>
                <Typography variant="h4" component="h1" >
                    Sign UP
                </Typography>
                
                <Typography variant="body1" gutterBottom style={{color:'#5F6C74', fontSize:'15px'}} >
                sign up to enjoy the feature of GreeNtik
                </Typography>
                
                <div style={{width:'300px'}} className='signup'>
                <SignUpForm/>

                </div>

               
                <Divider>
                    OR
                </Divider>

                <div style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                <SignInWithGoogle/>
                </div>

                
                
                <Typography variant="body2" gutterBottom textAlign='center'>
                    Already have an account?
                    <Link component={RouterLink} to='/login' style={{textDecoration: "none"}} >
                        Login
                    </Link>
                </Typography>
            
            </Stack>
            </div>
            </div>
        </Container>
    )
}
