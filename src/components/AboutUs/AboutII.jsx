import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';

function AboutII() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="container">
            <div className='UU'>
                <section className="why-us p-0">
                    <div className="container">
                        <div className="row">
                            {/* why us left */}
                            <div className="col-lg-6 d-none d-lg-block p-0" style={{ backgroundImage: 'url(/img/05.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            </div>
                            {/* why us right */}
                            <div className="col-lg-6 col-md-12 bg-dark px-4 py-5 p-lg-5 text-white">
                                <div className="h-100">
                                    <div className="title text-start p-0">
                                        <span className="pre-title">{t('aboutus.whoWeAre')}</span>
                                        <h2 className="text-white">{t('aboutus.whoWeAreDesc')}</h2>
                                        <p>{t('aboutus.experienceDesc')}</p>
                                    </div>
                                    <div className="row">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row testimonials">
                            {/* testimonials left */}
                            <div className="col-lg-6 col-md-12 bg-light px-4 py-5 p-lg-5">
                                <div className="h-100">
                                    <div className="title text-center p-0">
                                        <span className="pre-title">{t('aboutus.clientTrust')}</span>
                                        <h2>{t('aboutus.trustDesc')}</h2>
                                        <hr />
                                        <h1>{t('aboutus.supportDesc')}</h1>
                                    </div>
                                </div>
                            </div>
                            {/* testimonials right */}
                            <div className="col-lg-6 d-none d-lg-block p-0" style={{ backgroundImage: 'url(/img/08.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AboutII;