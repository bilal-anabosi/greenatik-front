import React, { useState, useEffect } from "react";

const Board = () => {
  const calculateTimeLeft = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const endOfMonth = new Date(year, month + 1, 1); // Start of the next month
    endOfMonth.setHours(0, 0, 0, 0); // Set to midnight of the next month start
    const difference = endOfMonth - currentDate;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container-fluid">
      <br/>
      <div className="lh-1">
        <h1 className="mb-2 fw-bold fs">Leader Board</h1>
      </div>
      <br/>
      <div className="table-responsive-xl mb-6 mb-lg-0">
        <div className="row flex-nowrap pb-3 pb-lg-0">
          <div className="col-lg-3 col-12 mb-6">
            <div className="card h-100 card-lg" style={{ backgroundColor: '#F2F6FA' }}>
              <div className="card-body p-6">
                <div className="d-flex justify-content-between align-items-center mb-6">
                  <div>
                    <h4 className="mb-0 fs-5">Joined members</h4>
                  </div>
                  <div className="icon-shape icon-lg bg-light-success text-dark-success rounded-circle">
                    <h1 className="mb-2 fw-bold fs-2">👋 </h1>
                  </div>
                </div>
                <div className="lh-1">
                  <h1 className="mb-2 fw-bold fs-2">369+</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-12 mb-6">
            <div className="card h-100 card-lg" style={{ backgroundColor: '#F2F6FA' }}>
              <div className="card-body p-6">
                <div className="d-flex justify-content-between align-items-center mb-6">
                  <div>
                    <h4 className="mb-0 fs-5">Achieved Goals</h4>
                  </div>
                  <div className="icon-shape icon-lg bg-light-success text-dark-success rounded-circle">
                    <h1 className="mb-2 fw-bold fs-2">💎</h1>
                  </div>
                </div>
                <div className="lh-1">
                  <h1 className="mb-2 fw-bold fs-2">732+</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12 mb-6">
            <div className="card h-100 card-lg" style={{ backgroundColor: '#FDF5D7' }}>
              <div className="card-body p-6">
                <div className="d-flex justify-content-center align-items-center mb-6">
                  <h4 className="mb-0 fs-2">Remaining time <br/> to completion 🔥</h4>
                  
                  <div className="deals-countdown" data-countdown="2024/10/10 00:00:00">
                    <span className="countdown-section">
                      <span className="countdown-amount hover-up">{timeLeft.days}</span>
                      <span className="countdown-period"> days </span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount hover-up">{timeLeft.hours}</span>
                      <span className="countdown-period"> hours </span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount hover-up">{timeLeft.minutes}</span>
                      <span className="countdown-period"> mins </span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount hover-up">{timeLeft.seconds}</span>
                      <span className="countdown-period"> sec </span>
                    </span>
                  </div>

                  <div className="icon-shape icon-lg rounded-circle mx-4" style={{ backgroundColor: '#FCECB7', color: '#000' }}>
                    <h1 className="mb-2 fw-bold fs-2">🏆</h1>
                  </div>
                </div>
                <div className="lh-1">
                  <h1 className="mb-2 fw-bold fs-2">
                    <div className="d-flex justify-content-center justify-content-lg-start text-center mt-1">
                    </div>
                  </h1>
                  <div> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" color='#9AA1A5CC' fill="currentColor" className="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                    </svg> 
                    <span className="t-text">
                      For more information check the <a href=" #">latest events </a>
                    </span>
                  </div>   
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
