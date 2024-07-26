import React, { useContext, useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { StoreContext } from '../../context/StoreProvider';
import Pagination from '@mui/material/Pagination';

const Storehouse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 575);
  const itemsPerPage = 5;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 575);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const storedata = useContext(StoreContext);

  const filteredStoreData = storedata.filter(item =>
    item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStoreData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div id='storehouse'>
      <div className="store__container">
        <div className="store__top">
          <div className="pagestop__direction">
            <div className="pages__name">
              Anbar
            </div>
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
          <div className="store_all">
            Ümumi ({filteredStoreData.length})
          </div>
        </div>
        <div className="store__items">
          {currentItems.length > 0 ? (
            isMobile ? (
              currentItems.map((item, index) => (
                <div className="cardstore" key={index}>
                  <div className="card-headers">Anbar adı</div>
                  <div className="card-content">{item.name}</div>
                  <div className="card-headers">Miqdar</div>
                  <div className="card-content">{item.amount}</div>
                  <div className="card-headers">Alış məbləği</div>
                  <div className="card-content">{item.cost}</div>
                </div>
              ))
            ) : (
              <table className="table mt-4">
                <thead>
                  <tr>
                    <th className='text-center'>Anbar adı</th>
                    <th className='text-center'>Miqdar</th>
                    <th className='text-center'>Alış məbləği</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item, index) => (
                    <tr key={index}>
                      <td className='text-center'>{item.name}</td>
                      <td className='text-center'>{item.amount}</td>
                      <td className='text-center'>{item.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )
          ) : (
            <div>
              <p>No products found</p>
            </div>
          )}
          <div className="pagination">
            <Pagination
              count={Math.ceil(filteredStoreData.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storehouse;
