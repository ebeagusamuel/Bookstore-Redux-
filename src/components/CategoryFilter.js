import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ onFilterChange }) => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  const categoriesOptions = categories.map(category => <option key={category}>{category}</option>);

  return (
    <div className="form-group mb-0">
      <label htmlFor="category">
        Please select a category
        <select
          className="form-control"
          id="category"
          name="category"
          onChange={e => onFilterChange(e.target.value)}
        >
          <option value={false}>All</option>
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
