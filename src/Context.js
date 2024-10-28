// // src/context/DataContext.js
// import React, { createContext, useState, useContext } from 'react';
// import phones from './data'; 

// const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//     const [data, setData] = useState(phones); 


//     const filterPhones = (selectedBrands, selectedColors, selectedStorage) => {
//         let filteredData = phones;
    
//         if (selectedBrands.length > 0) {
//             filteredData = filteredData.filter(phone =>
//                 selectedBrands.includes(phone.brand)
//             );
//         }
    
//         if (selectedColors.length > 0) {
//             filteredData = filteredData.filter(phone =>
//                 selectedColors.includes(phone.color)
//             );
//         }
    
//         if (selectedStorage.length > 0) {
//             filteredData = filteredData.filter(phone =>
//                 selectedStorage.includes(phone.storage)
//             );
//         }
    
//         setData(filteredData);
//         console.log('filterData', filteredData);
//     };
    
       
//     return (
//         <DataContext.Provider value={{ data, setData, filterPhones }}>
//             {children}
//         </DataContext.Provider>
//     );
// };

// export const useData = () => useContext(DataContext);
