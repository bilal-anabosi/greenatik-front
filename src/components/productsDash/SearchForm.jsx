import React from 'react';

const SearchForm = ({ handleSearchChange }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-2 mb-lg-0">
      <form className="d-flex" role="search">
        <input
          className="form-control"
          type="search"
          placeholder="Search Products"
          aria-label="Search"
          onChange={handleSearchChange}
        />
      </form>
    </div>
  );
}

export default SearchForm;
