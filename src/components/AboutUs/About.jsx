import React from 'react'
import './About.css';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();
return (
<div>
    <div className='AAA'>
        <div className="left bg-grad pattern-overlay-4">
            <img src="/img/‏‏04.png" alt="..." className='imggg' />
                <br /><br /><br /><br /><br />
                    <div className="container">
                        <div className="row all-text-white">
                            <div className="col-md-12 align-self-center position-relative">
                                <h1 className="fw-bold display-1 mb-2 mb-md-n4 mt-9">{t('aboutus.about')}</h1>
                            </div>
                        </div>
                    </div>
        </div>
    </div>
</div> 
)
}
export default About;