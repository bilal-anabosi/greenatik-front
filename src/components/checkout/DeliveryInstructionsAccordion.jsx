import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const DeliveryInstructionsAccordion = ({ onUpdate }) => {
  const [deliveryInstructions, setDeliveryInstructions] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (lng) => {
  i18n.changeLanguage(lng);
};
  const handleInputChange = (event) => {
    setDeliveryInstructions(event.target.value);
    onUpdate({ deliveryInstructions: event.target.value });
  };

  const handleLinkClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    setIsClicked(false);
  }, []);

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
        {t('deliveryInstructions.title')}
      </a>
      <div
        id="flush-collapseThree"
        className={`accordion-collapse collapse ${isClicked ? 'show' : ''}`}
        data-bs-parent="#accordionFlushExample"
        style={{ marginTop: '5px' }}
      >
        <div className="mt-5">
          <label htmlFor="DeliveryInstructions" className="form-label sr-only">
            {t('deliveryInstructions.label')}
          </label>
          <textarea
            className="form-control"
            id="DeliveryInstructions"
            rows="3"
            placeholder={t('deliveryInstructions.placeholder')}
            value={deliveryInstructions}
            onChange={handleInputChange}
          ></textarea>
          <p className="form-text">{t('deliveryInstructions.helpText')}</p>
          <div className="mt-5 d-flex justify-content-end">
            <a
              href="#!"
              className="btn btn-primary ms-2"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              {t('deliveryInstructions.nextButton')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInstructionsAccordion;
