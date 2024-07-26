import React, { createContext, useState, useEffect } from 'react';
export const CashboxesContext = createContext();
export const CashboxesProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:5500/smart-biznes/src/data/cashbox.json')
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
          name: item.name,
          amount: item.amount,
          count: item.count
        })).filter(item => item.name && item.amount && item.count); 
        setData(filteredData);
      })
      .catch((error) => {
        console.error('Error fetching the data:', error);
      });
  }, []);
  return (
    <CashboxesContext.Provider value={data}>
      {children}
    </CashboxesContext.Provider>
  );
};



