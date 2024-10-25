// src/context/DataContext.js
import React, { createContext, useState, useContext } from 'react';
import phones from './data'; 

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(phones); 

    const filterPhones = (brandCriteria, colorCriteria, storageFilter) => {
        let filteredData = phones;
    
        if (brandCriteria) {
            filteredData = filteredData.filter(phone => phone.brand === brandCriteria);
        }
        
        if (colorCriteria) {
            filteredData = filteredData.filter(phone => phone.color === colorCriteria);
        }
    
        if (storageFilter) {
            filteredData = filteredData.filter(phone => phone.storage === storageFilter); // Match exact storage string
        }
        
        setData(filteredData);
        console.log('Final filtered data:', filteredData);
    };
       
       
    return (
        <DataContext.Provider value={{ data, setData, filterPhones }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
