import React from 'react';
import './Formss.css';
const Map = ({ locationUrl }) => {
return (
    <div className="col-lg-6">
        <div className="row g-4">
            <div className="col-sm-6 col-lg-12">
                <div className="map-container" >
                    <iframe src={locationUrl} width={800} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
        </div>
    </div>
);
};
export default Map;