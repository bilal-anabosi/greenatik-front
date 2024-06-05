import React from 'react';
import { useTranslation } from 'react-i18next';

const CheckoutComponent = () => {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (lng) => {
  i18n.changeLanguage(lng);
};

  return (
    <div className="row" style={{ padding: "10px 10px" }}>
      <div className="col-12">
        <div>
          <div className="mb-8">
            <h1 className="fw-bold mb-0">{t('checkout.title')}</h1>
            <p className="mb-0" style={{ color: '#5c6c75' }}>
              {t('checkout.alreadyHaveAccount')}{' '}
              <a href="/sign-up" style={{ color: '#0aad0a' }}>{t('checkout.signIn')}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
