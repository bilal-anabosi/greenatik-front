import Container from '@mui/material/Container';
import LoginForm from '../Forms/LoginForm.jsx';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link as RouterLink} from 'react-router-dom';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import SignInWithGoogle from '../SignInWithGoogle.jsx';
import React from 'react';

import './Pages.css'
import { Logout } from '../Inputs/logout.jsx';

export default function LoginPage() {

   
    return (
        
        <Container sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            
            gap: 2
        }}>
            <div className='row'>
                <div className='col-md-6 py-5'>
            <img height={400} width={370} src='./img/man and woman at table with laptop.png'/>
            </div>

            <div className='login col-md-6'>
            <Stack sx={{
                gap: 2,
                marginTop:'50px'
            }}>
                <Typography variant="h4" component="h1" >
                    Sign In
                </Typography>
                
                <Typography variant="body1" gutterBottom style={{color:'#5F6C74', fontSize:'15px'}} >
                    Welcome back! please login to continue to your account
                </Typography>

                <LoginForm/>

                <Link component={RouterLink} to='/forget' style={{textDecoration: "none",alignItems:'center',justifyContent:'center',display:'flex'}}>
                    Forgot your password? 
                </Link>

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
            </div>
        </Container>
    )
}
