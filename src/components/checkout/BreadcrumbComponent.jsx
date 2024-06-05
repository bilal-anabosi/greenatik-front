import React from 'react';
import { useTranslation } from 'react-i18next';

const BreadcrumbComponent = () => {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (lng) => {
  i18n.changeLanguage(lng);
};
  return (
    <nav aria-label="breadcrumb" style={{ padding: "10px 10px" }}>
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item"><a href="/home">{t('breadcrumb1.home')}</a></li>
        <li className="breadcrumb-item"><a href="/store">{t('breadcrumb1.shop')}</a></li>
        <li className="breadcrumb-item active" aria-current="page">{t('breadcrumb1.shopCheckout')}</li>
      </ol>
    </nav>
  );
};

export default BreadcrumbComponent;
