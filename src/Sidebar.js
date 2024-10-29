
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBrands, setColors, setStorage, applyFilters, resetFilters } from './redux/Slice';
import Button from '@mui/material/Button';


const Sidebar = () => {
    const dispatch = useDispatch();
    const { selectedBrands, selectedColors, selectedStorage } = useSelector((state) => state.filters);

    const handleBrandChange = (e) => {
        const value = e.target.value;
        dispatch(
            setBrands(selectedBrands.includes(value)
                ? selectedBrands.filter((brand) => brand !== value)
                : [...selectedBrands, value]
            )
        );
    };

    const handleColorChange = (e) => {
        const value = e.target.value;
        dispatch(
            setColors(selectedColors.includes(value)
                ? selectedColors.filter((color) => color !== value)
                : [...selectedColors, value]
            )
        );
    };

    const handleStorageChange = (e) => {
        const value = e.target.value;
        dispatch(
            setStorage(selectedStorage.includes(value)
                ? selectedStorage.filter((storage) => storage !== value)
                : [...selectedStorage, value]
            )
        );
    };

    const handleApplyFilters = () => {
        dispatch(applyFilters());
    };

    const handleResetFilters = () => {
        dispatch(resetFilters());
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
      
      <div className='mt-5 ml-9'>
      <Button variant='contained' className=" px-2 py-1 bg-cyan-600 text-white rounded" onClick={handleApplyFilters}>
        Apply 
      </Button>
      </div>
      <div className='mt-2 ml-9'>
      <Button variant='outlined' className="mt-4 px-2 py-1 bg-gray-300 rounded" onClick={handleResetFilters}>
        Reset 
      </Button>
      </div>
    </div>
  );
};

export default Sidebar;
