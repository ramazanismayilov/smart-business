import React, { useContext, useRef, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import { SaleContext } from '../../context/SaleProvider';
import Button from '../../components/Button/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Sale = () => {
  const saleData = useContext(SaleContext)
  const [searchItem, setSearchItem] = useState("")

  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
    setPage(1);
  }

  const handleChange = (event, value) => {
    setPage(value);
  };

  const searchedProducts = saleData.filter(item => item.name.toLowerCase().includes(searchItem.toLowerCase()))
  const startIndex = (page - 1) * itemsPerPage;
  const selectedData = searchedProducts.slice(startIndex, startIndex + itemsPerPage);

  const [activeIndex, setActiveIndex] = useState(null);
  const menuRefs = useRef([]);

  const openMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div className='salepage py-4 px-3'>
      <div className="container">
        <div className="sale p-4 rounded-3">
          <div className="heading flex-wrap d-flex align-items-center justify-content-between">
            <div className="title">
              <h5 className='fw-bold fs-2'>Satış</h5>
            </div>
            <div className="search">
              <div className="input-group">
                <span className="input-group-text"><CiSearch /></span>
                <input type="text" className="form-control" placeholder="Axtar..." value={searchItem} onChange={handleSearch} />
              </div>
            </div>
          </div>
          <div className='d-flex flex-wrap align-items-center justify-content-between gap-3 mt-4'>
            <h4 className='pb-2 text-center fw-bold'>Satış ({saleData.length})</h4>
            <div className="filterbtn d-flex gap-3">
              <Button />
            </div>
          </div>
          <div className='laptop'>
            <table className="table mt-4">
              <thead>
                <tr>
                  <th className='text-center' scope="col">Ad</th>
                  <th className='text-center' scope="col">Tarix</th>
                  <th className='text-center' scope="col">Miqdar</th>
                  <th className='text-center' scope="col">Maya dəyəri</th>
                  <th className='text-center' scope="col">Satış qiyməti</th>
                  <th className='text-center' scope="col">Mənfəət</th>
                </tr>
              </thead>
              <tbody>
                {searchedProducts.length > 0 ? selectedData.map(item => (
                  <tr key={item.id}>
                    <td className='text-center'>{item.name.slice(0, 3)}...</td>
                    <td className='text-center'>{item.date}</td>
                    <td className='text-center'>{item.quantity}</td>
                    <td className='text-center'>{item.cost}₼</td>
                    <td className='text-center'>{item.salePrice}₼</td>
                    <td className='text-center'>{item.profit}₼</td>
                  </tr>
                )) : <tr>
                  <td colSpan="6" className='text-center'>Məhsul tapılmadı</td>
                </tr>}
              </tbody>
            </table>
          </div>

          <div className="mobile my-4">
            {searchedProducts.length > 0 ? selectedData.map((item, index) => (
              <div key={index} className="accardion mt-3 rounded px-3 py-2">
                <div onClick={() => openMenu(index)} className="head d-flex align-items-center justify-content-between">
                  <div className='d-flex align-items-center gap-5'>
                    <div className='name'>
                      <h6>Ad</h6>
                      <span>{item.name.slice(0, 5)}...</span>
                    </div>
                    <div className='date'>
                      <h6>Tarix</h6>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <button className='bg-transparent'><FaChevronDown /></button>
                </div>
                <div ref={el => menuRefs.current[index] = el} className={`body mt-3 ${activeIndex === index ? 'open' : ''}`}>
                  <div className='d-flex align-items-center gap-5'>
                    <div className="cost">
                      <h6>Maya dəyəri</h6>
                      <span>{item.cost}₼</span>
                    </div>
                    <div className="quantity">
                      <h6>Miqdar</h6>
                      <span>{item.quantity}</span>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-5 mt-3'>
                    <div className="sale-price">
                      <h6>Satış qiyməti</h6>
                      <span>{item.salePrice}</span>
                    </div>
                    <div className="profit">
                      <h6>Mənfəət</h6>
                      <span>{item.profit}₼</span>
                    </div>
                  </div>
                </div>
              </div>
            )) : <p className='text-center mt-5'>No products found</p>}
          </div>

          {searchedProducts.length > itemsPerPage && (
            <div className="pagination d-flex justify-content-end">
              <Stack spacing={2}>
                <Pagination
                  variant="outlined"
                  shape="rounded"
                  count={Math.ceil(searchedProducts.length / itemsPerPage)}
                  page={page}
                  onChange={handleChange}
                />
              </Stack>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Sale