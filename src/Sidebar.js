import React, { useState } from 'react';
import { useData } from './Context';

const Sidebar = () => {
  const { filterPhones } = useData();
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedStorage, setSelectedStorage] = useState([]);

  const handleBrandChange = (e) => {
    const value = e.target.value;
    setSelectedBrands((prev) =>
      prev.includes(value) ? prev.filter((brand) => brand !== value) : [...prev, value]
    );
  };

  const handleColorChange = (e) => {
    const value = e.target.value;
    setSelectedColors((prev) =>
      prev.includes(value) ? prev.filter((color) => color !== value) : [...prev, value]
    );
  };

  const handleStorageChange = (e) => {
    const value = e.target.value;
    setSelectedStorage((prev) =>
      prev.includes(value) ? prev.filter((storage) => storage !== value) : [...prev, value]
    );
  };

  const handleApplyFilters = () => {
    filterPhones(selectedBrands, selectedColors, selectedStorage);
  };

  const handleResetFilters = () => {
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedStorage([]);
    filterPhones(); // Call without any criteria to reset
  };

  return (
    <div className="h-auto flex flex-col w-[200px] border-2 border-green-500">
      <h2>FILTERS</h2>

      <h3>Brand:</h3>
      {["Samsung", "Apple", "OnePlus", "Google"].map((brand) => (
        <label key={brand}>
          <input
            type="checkbox"
            value={brand}
            checked={selectedBrands.includes(brand)}
            onChange={handleBrandChange}
          />
          {brand}
        </label>
      ))}

      <h3>Storage:</h3>
      {["64GB", "128GB", "256GB"].map((storage) => (
        <label key={storage}>
          <input
            type="checkbox"
            value={storage}
            checked={selectedStorage.includes(storage)}
            onChange={handleStorageChange}
          />
          {storage}
        </label>
      ))}

      <h3>Color:</h3>
      {["Red", "Blue", "Green", "White"].map((color) => (
        <label key={color}>
          <input
            type="checkbox"
            value={color}
            checked={selectedColors.includes(color)}
            onChange={handleColorChange}
          />
          {color}
        </label>
      ))}

      {/* Apply filters button */}
      <button className="mt-4 px-2 py-1 bg-blue-500 text-white rounded" onClick={handleApplyFilters}>
        Apply Filters
      </button>

      {/* Reset button */}
      <button className="mt-2 px-2 py-1 bg-gray-300 rounded" onClick={handleResetFilters}>
        Reset Filters
      </button>
    </div>
  );
};

export default Sidebar;
