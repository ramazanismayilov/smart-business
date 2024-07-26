import React, { useContext, useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { DebtContext } from '../../context/DebtProvider';
import Pagination from '@mui/material/Pagination';

const Debt = () => {
  const [showCreditorDetails, setShowCreditorDetails] = useState(true);
  const [showDebtorDetails, setShowDebtorDetails] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 575);
  const itemsPerPage = 2;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 575);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCreditorDetails = () => {
    setShowCreditorDetails(true);
    setShowDebtorDetails(false);
  };

  const toggleDebtorDetails = () => {
    setShowDebtorDetails(true);
    setShowCreditorDetails(false);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const debtData = useContext(DebtContext);

  const filteredDebtData = debtData.filter(item => {
    const searchMatch = item.nameOfSupplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    const isCreditor = showCreditorDetails && item.nameOfSupplier;
    const isDebtor = showDebtorDetails && item.customerName;
    return searchMatch && (isCreditor || isDebtor);
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredDebtData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div id='debt'>
      <div className="debt__container">
        <div className="debt__top">
          <div className="pagestop__direction">
            <div className="pages__name">Borc</div>
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Axtar..."
                className="search-input"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="debts__name">
            <div
              className={`debt__creditor ${showCreditorDetails ? 'text' : ''}`}
              onClick={toggleCreditorDetails}
            >
              <p>Kreditor (2000₼)</p>
            </div>
            <div
              className={`debt__debtor ${showDebtorDetails ? 'text' : ''}`}
              onClick={toggleDebtorDetails}
            >
              <p>Debitor (3200₼)</p>
            </div>
          </div>
        </div>
        <div className="debt__items">
          {currentItems.length > 0 ? (
            isMobile ? (
              currentItems.map((item, index) => (
                <div className="card" key={index}>
                  <div className="card-headers">{showCreditorDetails ? 'Təchizatçının adı' : 'Müştərinin adı'}</div>
                  <div className="card-content">{showCreditorDetails ? item.nameOfSupplier : item.customerName}</div>
                  <div className="card-headers">Məbləğ</div>
                  <div className="card-content">{item.amount}₼</div>
                </div>
              ))
            ) : (
              <table className="table mt-4">
                <thead>
                  <tr className='tr'>
                    <th className='text-center'>{showCreditorDetails ? 'Təchizatçının adı' : 'Müştərinin adı'}</th>
                    <th className='text-center'>Məbləğ</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item, index) => (
                    <tr key={index}>
                      <td className='text-center'>{showCreditorDetails ? item.nameOfSupplier : item.customerName}</td>
                      <td className='text-center'>{item.amount}₼</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )
          ) : (
            <div>
              <p>No debt data found</p>
            </div>
          )}
          <div className="pagination">
            <Pagination
              count={Math.ceil(filteredDebtData.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Debt;
