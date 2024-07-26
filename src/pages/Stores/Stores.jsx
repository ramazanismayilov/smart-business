import React from 'react'
import Store from '../../assets/images/storesphoto/store.png'
import Location from '../../assets/images/storesphoto/location.png'
const Stores = () => {
  return (
    <div className='storespage rounded p-4'>
      <div className="container">
        <div className="heading">
          <h4 className='fw-bold'>Mağazalar</h4>
        </div>
        <div className="stores mt-4">
          <div className="head d-flex align-items-center gap-3">
            <div className="image p-2 rounded">
              <img src={Store} alt="images/Store" />
            </div>
            <div className="title">
              <span className='fw-bold'>Mağazalar</span>
            </div>
          </div>
          <div className="stores-name d-flex flex-column gap-3 mt-4">
            <div className='d-flex align-items-center gap-3'>
              <img src={Location} alt="images/Location" />
              <span>Gənclik filialı (Ayna Sultanova küçəsi 49) </span>
            </div>
            <div className='d-flex align-items-center gap-3'>
              <img src={Location} alt="images/Location" />
              <span>28 May filialı (Səməd Vurğun küçəsi 17) </span>
            </div>
            <div className='d-flex align-items-center gap-3'>
              <img src={Location} alt="images/Location" />
              <span>Nərimanov filialı (Bəşər əsədli 32) </span>
            </div>
            <div className='d-flex align-items-center gap-3'>
              <img src={Location} alt="images/Location" />
              <span>Gənclik filialı (Ayna Sultanova küçəsi 49) </span>
            </div>
            <div className='d-flex align-items-center gap-3'>
              <img src={Location} alt="images/Location" />
              <span>Gənclik filialı (Ayna Sultanova küçəsi 49) </span>
            </div>
            <div className='d-flex align-items-center gap-3'>
              <img src={Location} alt="images/Location" />
              <span>Gənclik filialı (Ayna Sultanova küçəsi 49) </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stores