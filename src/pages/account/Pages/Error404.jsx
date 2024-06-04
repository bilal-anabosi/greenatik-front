import React from 'react';
import { Link as RouterLink} from 'react-router-dom';
import Link from '@mui/material/Link';
function Error404() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center ">
        <div className="col-md-6 ">
          <img src={'./img/لقطة شاشة 2024-04-06 022451.png'} className="img-fluid" alt="screenshot" style={{ width: '50%', margin: '0 auto' }} />
          <h1>Something wrong here...</h1>
          <p>We can't find the page you are looking for.<br/>Check out our help center or head back to the home page.</p>
          <button type="button" className="btn btn-lg " style={{ background: '#071E2A', color: 'white', border: 'none',marginRight:'10px' }}>Help center </button>
        <button type="button" className="btn btn-primary btn-lg" style={{ background: '#4EA933', color: 'white', border: 'none' }}> 
        <Link component={RouterLink} to='/' style={{textDecoration: "none", color:'white'}} >
        Back to Home     
        </Link></button>
        </div>

        <div className="col-md-6">
          <img src={'./img/لقطة شاشة 2024-04-11 165745.png'} className="img-fluid" alt="screenshot" />
        </div>
      </div>
      
    </div>
  );
}

export default Error404;


