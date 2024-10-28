import React from 'react';
import {  useSelector } from 'react-redux';
// import { useData } from './Context';
// import phones from './redux/Slice';

const Body = () => {

  // const { data:phones } = useData();
  
  const filteredPhones = useSelector((state)=>state.filters.filteredPhones);

  return (
    <div className='body flex  w-full '>
  
      <div className=' flex flex-wrap gap-9 
      
        p-4'>
        
        {filteredPhones.map((item, index) => (
          <ul key={index} className=' w-[230px]   mb-4  shadow-lg shadow-cyan-500/50  p-2 rounded-lg'>
            <li ><img className='w-[214px] h-[214px]' src={item.url} alt='image of respective phone'/></li>
            <li><strong>Phone Name:</strong> {item.phoneName}</li>
            <li><strong>Brand:</strong> {item.brand}</li>

            <li><strong>Price:</strong> {item.price}</li>
            
            <li><strong>Color:</strong> {item.color}</li>
            <li><strong>Battery:</strong> {item.battery}</li>
            <li><strong>Screen Size:</strong> {item.screenSize}</li>
            <li><strong>RAM:</strong> {item.ram}</li>
            <li><strong>Storage:</strong> {item.storage}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Body;
