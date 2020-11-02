import React from 'react';

const CategoryFilter = () => {

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
  const categoriesOptions = categories.map(category => <option key={category}>{category}</option>);

  return (
    <div className="form-group mb-0">
      <label htmlFor="category">
        Please select a category
        <select
          className="form-control"
          id="category"
          name="category"
        >
          {categoriesOptions}
        </select>
      </label>
    </div>
  );
};

export default CategoryFilter;
