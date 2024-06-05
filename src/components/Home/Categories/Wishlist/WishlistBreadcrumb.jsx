import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const WishlistBreadcrumb = () => {
    const { t, i18n } = useTranslation();
    const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    };
    return (
        <div className="mt-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="/home">{t('breadcrumb.home')}</a></li>
                <li className="breadcrumb-item"><a href="/store">{t('breadcrumb.shop')}</a></li>
                <li className="breadcrumb-item active" aria-current="page">{t('breadcrumb.myWishlist')}</li>
              </ol>
            </nav>
          </div>
        </div>
        </div>
    </div>
    );
}

export default WishlistBreadcrumb;
