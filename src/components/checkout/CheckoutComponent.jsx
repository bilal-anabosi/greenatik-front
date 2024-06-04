import React from 'react';

const CheckoutComponent = () => {
  return (
    <div className="row" style={{  padding:" 10px 10px"}}>
      <div className="col-12">
        <div>
          <div className="mb-8">
            <h1 className="fw-bold mb-0">Checkout</h1>
            <p className="mb-0"  style={{ color: '#5c6c75' }}>
              Already have an account? Click here to{' '}
              <a href="/sign-up" style={{ color: '#0aad0a' }}>Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
