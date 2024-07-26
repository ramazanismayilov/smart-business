import React, { useContext, useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { CashboxesContext } from '../../context/CashboxesProvider';
import Pagination from '@mui/material/Pagination';

const Cashbox = () => {
  const [showRegistorDetails, setShowRegistorDetails] = useState(true);
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 575);
  const itemsPerPage = 3;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 575);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleRegistorDetails = () => {
    setShowRegistorDetails(true);
    setShowPaymentDetails(false);
    setShowCardDetails(false);
  };

  const togglePaymentDetails = () => {
    setShowPaymentDetails(true);
    setShowRegistorDetails(false);
    setShowCardDetails(false);
  };

  const toggleCardDetails = () => {
    setShowCardDetails(true);
    setShowRegistorDetails(false);
    setShowPaymentDetails(false);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const cashData = useContext(CashboxesContext);

  const filteredCashData = cashData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCashData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div id='cashbox'>
      <div className="cashbox__container">
        <div className="cashbox__top">
          <div className="pagestop__direction">
            <div className="pages__name">Kassa</div>
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
          <div className="cashboxs__name">
            <div
              className={`cashbox__cashregister ${showRegistorDetails ? 'text' : ''}`}
              onClick={toggleRegistorDetails}
            >
              <p className={`cashcregistor ${showRegistorDetails ? 'text' : ''}`}>Kassa (150₼)</p>
            </div>
            <div
              className={`cashbox__payment ${showPaymentDetails ? 'text' : ''}`}
              onClick={togglePaymentDetails}
            >
              <p className={`cashpayment ${showPaymentDetails ? 'text' : ''}`}>Nəğd ödəniş (100₼)</p>
            </div>
            <div
              className={`cashbox__card ${showCardDetails ? 'text' : ''}`}
              onClick={toggleCardDetails}
            >
              <p className={`cashcard ${showCardDetails ? 'text' : ''}`}>Kartla Ödəniş (50₼)</p>
            </div>
          </div>
        </div>
        <div className="cashbox__items">
          {currentItems.length > 0 ? (
            isMobile ? (
              currentItems.map((item, index) => (
                <div className="card" key={index}>
                  <div className="card-headers">Kassa adı</div>
                  <div className="card-content">{item.name}</div>
                  <div className="card-headers">Miqdar</div>
                  <div className="card-content">{item.amount}</div>
                </div>
              ))
            ) : (
              <>
                <table className="table mt-4">
                  <thead>
                    <tr>
                      <th className='text-center'>Kassa adı</th>
                      <th className='text-center'>Miqdar</th>
                    </tr>
                  </thead>
                  <tbody className='tbdody'>
                    {currentItems.map((item, index) => (
                      <tr key={index}>
                        <td className='text-center'>{item.name}</td>
                        <td className='text-center'>{item.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="pagination">
                  <Pagination
                    count={Math.ceil(filteredCashData.length / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                  />
                </div>
              </>
            )
          ) : (
            <div>
              <p>No data found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cashbox;
