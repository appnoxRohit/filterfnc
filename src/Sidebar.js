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
    <div className="h-auto pl-3 flex flex-col w-[200px] ">
      <h2 className='pl-12'><strong>FILTERS</strong></h2>

      < div className='mt-5'>
      <h3 className='font-bold'>Brand:</h3>
      {["Samsung", "Apple", "OnePlus", "Google"].map((brand) => (
        <label key={brand}>
          <input
          
            type="checkbox"
            value={brand}
            checked={selectedBrands.includes(brand)}
            onChange={handleBrandChange}
          />
          {brand}
          <br/>

        </label>
      ))}
      </div>


    

     <div className='mt-3'>
     <h3 className='font-bold'>Storage:</h3>
      {["64GB", "128GB", "256GB"].map((storage) => (
        <label key={storage}>
          <input
            type="checkbox"
            value={storage}
            checked={selectedStorage.includes(storage)}
            onChange={handleStorageChange}
          />
          {storage}
          <br/>

        </label>
      ))}
     </div>

      <div className='mt-3 '>
      <h3 className='font-bold'>Color:</h3>
      {["Red", "Blue", "Green", "White"].map((color) => (
        <label key={color}>
          <input
            type="checkbox"
            value={color}
            checked={selectedColors.includes(color)}
            onChange={handleColorChange}
          />
          {color}
          <br/>
        </label>
      ))}
      </div>

      {/* Apply filters button */}
      <button className="mt-4 px-2 py-1 bg-cyan-300 text-white rounded" onClick={handleApplyFilters}>
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
