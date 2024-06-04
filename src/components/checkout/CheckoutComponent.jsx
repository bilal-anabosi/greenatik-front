import React from 'react';
import { Link } from 'react-router-dom';
const CheckoutComponent = () => {
  return (
    <div className="row" style={{  padding:" 10px 10px"}}>
      <div className="col-12">
        <div>
          <div className="mb-8">
            <h1 className="fw-bold mb-0">Checkout</h1>
            <p className="mb-0"  style={{ color: '#5c6c75' }}>
              Already have an account? Click here to{' '}
              <Link to="/sign-up" style={{ color: '#0aad0a' }}>Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
