import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilterDropdown = ({ onFilterChange }) => {
  const [filter, setFilter] = useState();

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <select value={filter} onChange={handleFilterChange}>
      <option value="weekly">Weekly</option>
      <option value="monthly">Monthly</option>
      <option value="yearly">Yearly</option>
    </select>
  );
};

export default FilterDropdown;
