import React from 'react';
import { useState } from 'react';
import './Feature.css';
import { useTranslation } from 'react-i18next';
const Feature = () => {

    const { t } = useTranslation();

    return (
        <section className="my-lg-14 my-8">
            <div className="container">
                <div className="row">
                    <FeatureItem
                        icon=
                        {
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" color='#34A853' fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                            </svg>
                        }
                        title={t('Feature.T1')}
                        description={t('Feature.D1')}
                    />
                    <FeatureItem
                        icon=
                        {
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" color='#34A853' fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/>
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
                            </svg>
                        }
                        title={t('Feature.T2')}
                        description={t('Feature.D2')}
                    />
                    <FeatureItem
                        icon=
                        {
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" color='#34A853' fill="currentColor" className="bi bi-bag-check" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                            </svg>
                        }
                        title={t('Feature.T3')}
                        description={t('Feature.D3')}
                    />
                    <FeatureItem
                        icon=
                        {
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" color='#34A853' fill="currentColor" className="bi bi-box-seam" viewBox="0 0 16 16">
                            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
                            </svg>
                        }
                        title={t('Feature.T4')}
                        description={t('Feature.D4')}
                    />
                </div>
            </div>
        </section>
    );
}
const FeatureItem = ({ icon, title, description }) => {
const [isHovered, setIsHovered] = useState(false);

    return (
    <div 
        className={`col-md-6 col-lg-3 ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        <div className="col-md-6 col-lg-3">
            <div className="feature-item">
                <div className="icon-circle">
                    {icon}
                </div>
                <h3 className="h5 mb-3">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    </div>
    );
}
export default Feature;