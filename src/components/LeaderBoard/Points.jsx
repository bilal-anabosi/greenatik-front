import React from 'react';

const Points = ({ logoSrc, Name, totalpoint, photoSrc, points, tasks }) => {
  return (
    <div>
    <div className="card h-100 card-lg">
      <div className="card-body p-6">
        <div className="d-md-flex flex-wrap align-items-start text-center text-md-start">
          <div className="mb-2">
            <div className="icon-shape icon-md bg-light-info text-dark-info rounded-circle">
              <img
                className="avatar-img border-0 rounded-circle"
                alt="..."
                src={photoSrc}
                style={{ width: '60px', height: '60px' }}
              />
            </div>
          </div>
          <div className="ms-md-4 ">
            <ul className="nav nav-divider justify-content-center justify-content-md-start">
              <li className="mb-2 fs-5">{Name}</li>
            </ul>
            <h1 className="mb-2 fw-bold fs-4">
              {totalpoint} <sub>pts.</sub>
            </h1>
          </div>

          <div className="avatar avatar-xl mx-6">
            <img
              className="avatar-img border-0 rounded-circle mx-6"
              alt="..."
              src={logoSrc}
              style={{ width: '100px', height: '80px' }}
            />
          </div>
        </div>
        <br/>
        <div className="lh-1 row">
          <div className="col-md-6">
            <div>
              <span className="mb-2 fw-bold fs-4">Points</span>
              <h1 className="mb-2 fw-bold fs-2">{points}</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <span className="mb-2 fw-bold fs-4">Tasks</span>
              <h1 className="mb-2 fw-bold fs-2">{tasks}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/><br/>
    </div>
  );
};

export default Points;
