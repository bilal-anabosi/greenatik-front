import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';

function AboutIII() {
    const { t, i18n } = useTranslation();

    return (
        <div className='XX'>
            <section className="bg-light triangle-down py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h5 className="m-0" dangerouslySetInnerHTML={{ __html: t('aboutus.commitment') }}></h5>
                    </div>
                </div>
            </section>
            <div className="background-container">
                <img src="/img/02.png" alt="..." className='ixx' />
                <div className="background-text">
                    <p dangerouslySetInnerHTML={{ __html: t('aboutus.joinMission') }}></p>
                    <h2>{t('aboutus.thankYou')}</h2>
                </div>
            </div>
        </div>
    );
}
export default AboutIII;