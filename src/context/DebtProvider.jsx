import React, { createContext, useState, useEffect } from 'react';

export const DebtContext = createContext();

export const DebtProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5500/smart-biznes/src/data/debt.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const filteredData = data.map(item => ({
          amount: item.amount,
          nameOfSupplier: item.nameofSupplier || "",
          customerName: item.customername || ""
        }));
        setData(filteredData);
      })
      .catch((error) => {
        console.error('Error fetching the data:', error);
      });
  }, []);

  return (
    <DebtContext.Provider value={data}>
      {children}
    </DebtContext.Provider>
  );
};