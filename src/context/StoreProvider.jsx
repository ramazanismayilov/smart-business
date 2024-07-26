import React, { createContext, useState, useEffect } from 'react';
export const StoreContext = createContext();
export const StoreProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:5500/smart-biznes/src/data/storage.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data); 
        const dataArray = Array.isArray(data) ? data : [data];
        const filteredData = dataArray.map(item => ({
          amount: item.amount,
          name: item.name,
          cost: item.cost
        })).filter(item => item.name && item.amount && item.cost); 
        setData(filteredData);
      })
      .catch((error) => {
        console.error('Error fetching the data:', error);
      });
  }, []);
  return (
    <StoreContext.Provider value={data}>
      {children}
    </StoreContext.Provider>
  );
};