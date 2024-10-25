import React, {  useState } from 'react';
import { useData } from './Context';

const Sidebar = () => {
  const { filterPhones } = useData();
  const [criteriaBrand, setCriteriaBrand] = useState('');
  const [storageFilter, setStorageFilter] = useState('');
  const [criteriaColor, setCriteriaColor] = useState('');
 
  const handleFilterBrand = (e) => {
    const brandValue = e.target.value;
    setCriteriaBrand(brandValue);
    filterPhones(brandValue, criteriaColor, storageFilter);

  };
  
  const handleFilterColor = (e) => {
    const colorValue = e.target.value;
    setCriteriaColor(colorValue);
    filterPhones(criteriaBrand, colorValue, storageFilter);

  };

  const handleStorageFilter = (e) => {
    const storageValue = e.target.value;
    setStorageFilter(storageValue);
    
    filterPhones(criteriaBrand, criteriaColor, storageValue);

    
    
  };
  const handleResetFilters = () => {
    setCriteriaBrand('');
    setCriteriaColor('');
    setStorageFilter('');
    filterPhones(); 
  };
  
  

  return (
    <div className='h-auto flex flex-col w-[200px] '>
      <h2>FILTERS</h2>

      <button onClick={handleResetFilters}>Reset</button>

      <label htmlFor="brand">Brand:</label>
      <select name="brand" id="brand" value={criteriaBrand} onChange={handleFilterBrand}>
        <option value="" disabled>  select an option  </option>
        <option value="Samsung">Samsung</option>
        <option value="Apple">Apple</option>
        <option value="OnePlus">OnePlus</option>
        <option value="Google">Google</option>
      </select>

      <label htmlFor="storage">Storage:</label>
      <select name="storage" id="storage" value={storageFilter} onChange={handleStorageFilter}>
        <option value="" disabled className=''>  select an option  </option>
        <option value="64GB">64GB</option>
        <option value="128GB">128GB</option>
        <option value="256GB">256GB</option>
      </select>

      <label htmlFor="color">Color:</label>
      <select name="color" id="color" value={criteriaColor} onChange={handleFilterColor}>
        <option value="" disabled> select an option </option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
        <option value="White">White</option>
      </select>
    </div>
  );
};

export default Sidebar;
