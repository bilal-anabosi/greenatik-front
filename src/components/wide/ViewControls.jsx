import React from 'react';

const ViewControls = ({ sortBy, setSortBy }) => {
  return (
    <div className="d-flex justify-content-end">
      <div style={{ width: '200px' }}>
        <select className="form-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="Featured">Sort by: Featured</option>
          <option value="Low to High">Price: Low to High</option>
          <option value="High to Low">Price: High to Low</option>
          <option value="Release Date">Release Date</option>
        </select>
      </div>
    </div>
  );
};

export default ViewControls;
