// components/Filters/FilterOptions.js
import React from 'react';

function FilterOptions({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="filter-options">
      <select value={selectedCategory} onChange={onCategoryChange}>
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterOptions;
