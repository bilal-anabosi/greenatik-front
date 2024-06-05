import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Discount = ({ onUpdate, totalPoints }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isDiscountApplied, setIsDiscountApplied] = useState(true);
  const [selectedPoints, setSelectedPoints] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (lng) => {
  i18n.changeLanguage(lng);
};
  const handleLinkClick = () => {
    setIsClicked(!isClicked);
    setSelectedPoints("");
  };

  const handleDiscountToggle = () => {
    setIsDiscountApplied(!isDiscountApplied);
  };

  const handlePointsChange = (event) => {
    let points = parseInt(event.target.value);
    points = isNaN(points) ? "" : points;
    points = points > totalPoints ? totalPoints : points;
    points = points < 0 ? "" : points;
    setSelectedPoints(points);
    setShowNotification(points > totalPoints);
  };

  const handleApplyDiscount = () => {
    if (selectedPoints === "") {
      setErrorMessage(t('discount.errorEmptyPoints'));
      return;
    }
    if (selectedPoints === 0) {
      setErrorMessage(t('discount.errorZeroPoints'));
      return;
    }
    if (totalPoints === 0) {
      setErrorMessage(t('discount.errorNoPoints'));
      return;
    }
    setErrorMessage("");
    const discountAmount = selectedPoints / 1;
    onUpdate({ isDiscountApplied, discountAmount, selectedPoints });
  };

  useEffect(() => {
    setIsClicked(false);
    setSelectedPoints("");
  }, []);

  const discountAmount = isDiscountApplied ? selectedPoints / 1 : 0;

  return (
    <div className="accordion-item py-4">
      <a
        href="#!"
        className={`text-inherit h5 ${isClicked ? 'text-success' : ''}`}
        data-bs-toggle="collapse"
        data-bs-target="#discountCollapse"
        aria-expanded={isClicked ? 'true' : 'false'}
        aria-controls="discountCollapse"
        onClick={handleLinkClick}
      >
        <i className="bi bi-cash" style={{ color: 'gray' }}></i>
        {t('discount.title')}
      </a>
      {isClicked && (
        <div
          id="discountCollapse"
          className={`accordion-collapse collapse ${isClicked ? 'show' : ''}`}
          aria-labelledby="discountHeading"
        >
          <div className="card card-bordered shadow-none mb-2">
            <div className="card-body p-6">
              <div className="d-flex mb-4">
                <div className="accordion-body">
                  <div className="d-flex flex-column">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="discountCheckbox"
                        checked={isDiscountApplied}
                        onChange={handleDiscountToggle}
                      />
                      <label className="form-check-label" htmlFor="discountCheckbox">
                        {t('discount.usePoints')}
                      </label>
                    </div>
                    {isDiscountApplied && (
                      <>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div>{t('discount.discountAmount')}: ${discountAmount.toFixed(2)}</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div>{t('discount.totalPoints')}: {totalPoints}</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div>
                            <label htmlFor="pointsInput" className="form-label">
                              {t('discount.pointsToUse')}
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="pointsInput"
                              value={selectedPoints}
                              onChange={handlePointsChange}
                              min="0"
                              max={totalPoints}
                              disabled={!isDiscountApplied}
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <button className="btn btn-primary" onClick={handleApplyDiscount}>
                            {t('discount.applyButton')}
                          </button>
                        </div>
                        {showNotification && (
                          <div className="alert alert-danger mt-3" role="alert">
                            {t('discount.notification')}
                          </div>
                        )}
                        {errorMessage && (
                          <div className="mb-3">
                            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                              <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                                <div className="toast-header">
                                  <img src="/favicon.ico" width={32} height={32} className="rounded me-2" alt="" />
                                  <strong className="me-auto">GreeNatik</strong>
                                  <small>Now</small>
                                  <button type="button" className="btn-close" onClick={() => setErrorMessage('')} aria-label="Close"></button>
                                </div>
                                <div className="toast-body">
                                  {errorMessage}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discount;
