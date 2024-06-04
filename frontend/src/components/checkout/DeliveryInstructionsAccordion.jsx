import React, { useState, useEffect } from 'react';

const DeliveryInstructionsAccordion = ({ onUpdate }) => {
  const [deliveryInstructions, setDeliveryInstructions] = useState('');
  const [isClicked, setIsClicked] = useState(false); // تعيين قيمة افتراضية للحالة هنا

  const handleInputChange = (event) => {
    setDeliveryInstructions(event.target.value);
    // Pass the updated delivery instructions back to the parent component (Checkout)
    onUpdate({ deliveryInstructions: event.target.value });
  };

  const handleLinkClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    // تعيين القيمة الافتراضية عند دخول المكون
    setIsClicked(false);
  }, []); // يتم تنفيذ هذا فقط عندما يتم تحميل المكون لأول مرة

  return (
    <div className="accordion-item py-4">
      <a
        href="#!"
        className={`text-inherit h5 ${isClicked ? 'text-success' : ''}`}
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseThree"
        aria-expanded="true"
        aria-controls="flush-collapseThree"
        onClick={handleLinkClick}
      >
        <i className="bi bi-clock" style={{ color: 'gray' }}></i>
        Delivery instructions
      </a>
      <div
        id="flush-collapseThree"
        className={`accordion-collapse collapse ${isClicked ? 'show' : ''}`}
        data-bs-parent="#accordionFlushExample"
        style={{ marginTop: '5px' }}
      >
        <div className="mt-5">
          <label htmlFor="DeliveryInstructions" className="form-label sr-only">
            Delivery instructions
          </label>
          <textarea
            className="form-control"
            id="DeliveryInstructions"
            rows="3"
            placeholder="Write delivery instructions"
            value={deliveryInstructions}
            onChange={handleInputChange}
          ></textarea>
          <p className="form-text">Add instructions for how you want your order shopped and/or delivered</p>
          <div className="mt-5 d-flex justify-content-end">
            <a
              href="#!"
              className="btn btn-primary ms-2"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              Next
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInstructionsAccordion;
