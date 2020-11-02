import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ onFilterChange }) => {
  const categories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  const categoriesOptions = categories.map(category => (
    <option key={category} value={category === 'All' ? '' : category}>
      {category}
    </option>
  ));

  return (
    <div className="filter form-group mb-4 bg-white w-100 px-2 py-3 shadow-sm">
      <label htmlFor="category" className="d-flex align-items-center justify-content-center mb-0">
        Filter by category
        <select
          className="form-control ml-3 w-50"
          id="category"
          name="category"
          onChange={e => onFilterChange(e.target.value)}
        >
          {categoriesOptions}
        </select>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
