import React from 'react';
import Points from './Points'; // Import the Points component

const CardPoint = ({ data }) => {
  // Take only the first three items from the data array
  const limitedData = data.slice(0, 3);

  return (
    <div className="container-fluid">
      <br />
      <br />
      <div className="lh-1">
        <h1 className="mb-2 fw-bold fs-2">Current Leaders</h1>
      </div>
      <div className="row">
        {limitedData.map((item, index) => (
          <div key={item._id} className="col-lg-4 col-12 mb-6">
            <Points 
              Name={item.username}

              photoSrc={item.image?.secure_url || './favicon.ico'}
              logoSrc={`/pics/A${index + 1}.png`} // Dynamically set logoSrc based on index
              points={item.points.total}
              tasks={item.points.tasks}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPoint;
