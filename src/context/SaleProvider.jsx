import React, { createContext, useEffect, useState } from 'react'
export const SaleContext = createContext();
export const SaleProvider = ({ children }) => {
  const [saleData, setSaleData] = useState([]);
  useEffect(() => {
    const getSaleData = async () => {
      try {
        await fetch('http://127.0.0.1:5500/smart-biznes/src/data/sale.json')
          .then(response => response.json())
          .then(data => setSaleData(data))
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };
    getSaleData();
  }, []);
  return (
    <SaleContext.Provider value={saleData}>
      {children}
    </SaleContext.Provider>
  )
}