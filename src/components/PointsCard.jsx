import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PointsCard = () => {
  const [points, setPoints] = useState({ total: 0, availablePoints: 0, tasks: 0, log: [] });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPoints = async () => {
      const token = localStorage.getItem('userToken');
      if (!token) {
        setError('No token found');
        return;
      }

      try {
        const response = await axios.get('http://localhost:4000/profile/points', {
          headers: { Authorization: `group__${token}` },
        });
        setPoints(response.data);
      } catch (error) {
        setError('Error fetching points');
      }
    };

    fetchPoints();
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8 col-xxl-7">
            <div className="row gy-4">
              <div className="col-12 col-sm-12">
                <div className="card widget-card border-light shadow-sm">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title widget-card-title mb-3">Total Points</h5>
                        <h4 className="card-subtitle text-body-secondary m-0">{points.total}</h4>
                      </div>
                      <div className="col-4">
                        <div className="d-flex justify-content-end">
                          <div className="lh-1 text-white bg-success rounded-circle p-3 d-flex align-items-center justify-content-center">
                            <i className="bi bi-database-fill"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex align-items-center mt-3">
                          <span className="lh-1 me-3 bg-success-subtle text-success rounded-circle p-1 d-flex align-items-center justify-content-center">
                            <i className="bi bi-arrow-right-short bsb-rotate-45"></i>
                          </span>
                          <div>
                            <p className="fs-7 mb-0">{points.averageTotalPointsChange ? points.averageTotalPointsChange.toFixed(2) : ''} %</p>
                            <p className="fs-7 mb-0 text-secondary">since last week</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12">
                <div className="card widget-card border-light shadow-sm">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title widget-card-title mb-3">Available Points</h5>
                        <h4 className="card-subtitle text-body-secondary m-0">{points.availablePoints}</h4>
                      </div>
                      <div className="col-4">
                        <div className="d-flex justify-content-end">
                          <div className="lh-1 text-white bg-success rounded-circle p-3 d-flex align-items-center justify-content-center">
                            <i className="bi bi-currency-dollar fs-4"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex align-items-center mt-3">
                          <span className="lh-1 me-3 bg-success-subtle text-success rounded-circle p-1 d-flex align-items-center justify-content-center">
                            <i className="bi bi-arrow-right-short bsb-rotate-n45"></i>
                          </span>
                          <div>
                            <p className="fs-7 mb-0">{points.averageAvailablePointsChange ? points.averageAvailablePointsChange.toFixed(2) : ''} %</p>
                            <p className="fs-7 mb-0 text-secondary">since last week</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12">
                <div className="card widget-card border-light shadow-sm">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title widget-card-title mb-3">Tasks</h5>
                        <h4 className="card-subtitle text-body-secondary m-0">{points.tasks}</h4>
                      </div>
                      <div className="col-4">
                        <div className="d-flex justify-content-end">
                          <div className="lh-1 text-white bg-success rounded-circle p-3 d-flex align-items-center justify-content-center">
                            <i className="bi bi-truck fs-4"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex align-items-center mt-3">
                          <span className="lh-1 me-3 bg-success-subtle text-success rounded-circle p-1 d-flex align-items-center justify-content-center">
                            <i className="bi bi-arrow-right-short bsb-rotate-n45"></i>
                          </span>
                          <div>
                            <p className="fs-7 mb-0">{points.averageTasksChange}%</p>
                            <p className="fs-7 mb-0 text-secondary">since last week</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table Section */}
              <div className="col-12">
                <div className="card border-light shadow-sm">
                  <div className="card-header bg-success text-white">
                    <h5 className="card-title mb-0">Points and Data</h5>
                  </div>
                  <div className="card-body p-4">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Date</th>
                          <th scope="col">Points Added</th>

                        </tr>
                      </thead>
                      <tbody>
                        {points.log.map((entry, index) => (
                          <tr key={index}>
                            <td>{new Date(entry.date).toLocaleDateString()}</td>
                            <td>{entry.pointsAdded}</td>

                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* End of Table Section */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PointsCard;
