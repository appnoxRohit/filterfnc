import React from 'react';
import { useData } from './Context';

const Body = () => {

  const { data:phones } = useData();

  return (
    <div className='body flex  w-full '>
  
      <div className=' flex flex-wrap gap-9 
      
        p-4'>
        
        {phones.map((item, index) => (
          <ul key={index} className=' w-[230px] bg-slate-200  mb-4 border p-2 rounded-lg'>
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
