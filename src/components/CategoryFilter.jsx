import React from 'react';

// dropdown lets me pick which category I want to see
export default function CategoryFilter({ value, onChange }) {
  return (
    <div>
      <label>Filter by Category: </label>
      {/* select is controlled by App state through props */}
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>
    </div>
  );
}