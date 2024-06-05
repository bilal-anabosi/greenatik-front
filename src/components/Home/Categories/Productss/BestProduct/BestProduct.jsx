import React from 'react';
import '../Products.css';
import Best from './Best';
import { useTranslation } from 'react-i18next';
const BestProduct = ( {exchangeRate}) => {

    const { t } = useTranslation();
return (
    <div className="kk">
        <section className="my-lg-14 my-8">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-6">
                        <h3 className="mb-1">{t('Categories.B1')}</h3>
                        <p className="mb-0">{t('Categories.B2')}</p>
                    </div>
                </div>
                <Best exchangeRate={exchangeRate} />
            </div>
        </section>
    </div>
);
};
export default BestProduct;