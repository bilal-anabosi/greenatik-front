import React from 'react';

const SelectOption = ({ handleSelectChange }) => {
  return (
    <div className="col-lg-2 col-md-4 col-12">
      <select className="form-select" onChange={handleSelectChange}>
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Disabled">Disabled</option>
        <option value="Draft">Draft</option>
      </select>
    </div>
  );
}

export default SelectOption;
