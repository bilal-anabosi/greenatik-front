import React from "react";
import { Link as RouterLink} from 'react-router-dom';
import Link from '@mui/material/Link';
function AccessDenied(){
    return(
        <>
<div style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: '1' }}>
        <p style={{ color: '#333333', fontSize: '70px', fontWeight: '150px' }}>Access Denied</p>
        <p style={{ color: '#333333', fontSize: '15px', fontWeight: '70px' }}>A site membership is required to view this page.<br/>Please 
        <Link component={RouterLink} to='/sign-up' style={{textDecoration: "none"}} >
                    Signup 
        </Link>
         or
         <Link component={RouterLink} to='/login' style={{textDecoration: "none"}} >
                    Login 
        </Link> 
        </p>   
        </div>
    <img src={'./img/woman and man discussing work at a bar table.png'} alt="screenshot" style={{ position: 'relative', zIndex: '0', maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
</div>


        
        </>
       
    )
};
export default AccessDenied;