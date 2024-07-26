import React from 'react'
import Profit from '../../assets/images/analysisphoto/profit.png'
import Cost from '../../assets/images/analysisphoto/cost.png'
import Active from '../../assets/images/analysisphoto/active.png'
import Percentage from '../../assets/images/analysisphoto/percentage.png'
import All from '../../assets/images/analysisphoto/all.png'
import Sale from '../../assets/images/analysisphoto/sale.png'
import Cashbox from '../../assets/images/analysisphoto/cashbox.png'
import Storehouse from '../../assets/images/analysisphoto/storehouse.png'
import Debt from '../../assets/images/analysisphoto/debt.png'
import { Link } from 'react-router-dom'
import MainPart from '../../components/Card/MainPart'
import SecondaryPart from '../../components/Card/SecondaryPart'
import Button from '../../components/Button/Button'
import LineChart from '../../components/LineChart/LineChart'

const Analysis = () => {
  return (
    <>
      <div className='analysis px-3'>
        <div className="container">
          <div className="heading flex-wrap d-flex align-items-center justify-content-between pt-3">
            <div className="title">
              <h5 className='fw-bold fs-2'>Analiz</h5>
            </div>
            <div className="filterbtn d-flex gap-3">
              <Button />
            </div>
          </div>
          <div className="cards mt-3">
            <div className="row g-3">
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <Link to='/sale'>
                  <MainPart
                    image={<img src={Sale} alt="image/Sale" />}
                    text={<p className='fw-medium'>Satış</p>}
                    progressBar={<div className="progress-bar" style={{ width: '35%' }} />}
                    price={<span className='fw-bold'>150 ₼</span>}
                  />
                </Link>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <Link to='/cashbox'>
                  <MainPart
                    image={<img src={Cashbox} alt="image/Cashbox" />}
                    text={<p className='fw-medium'>Kassa</p>}
                    progressBar={<div className="progress-bar" style={{ width: '27%' }} />}
                    price={<span className='fw-bold'>600 ₼</span>}
                  />
                </Link>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <Link to='/storehouse'>
                  <MainPart
                    image={<img src={Storehouse} alt="image/Storehouse" />}
                    text={<p className='fw-medium'>Anbar</p>}
                    progressBar={<div className="progress-bar" style={{ width: '100%' }} />}
                    price={<span className='fw-bold'>3000 ₼</span>}
                  />
                </Link>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <Link to='/debt'>
                  <MainPart
                    image={<img src={Debt} alt="image/Debt" />}
                    text={<p className='fw-medium'>Borc</p>}
                    progressBar={<div className="progress-bar" style={{ width: '15%' }} />}
                    price={<span className='fw-bold'>1200 ₼</span>}
                  />
                </Link>
              </div>
            </div>
            <div className="row g-3 mt-1">
              <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                <div className="row g-3">
                  <div className="col-12 col-sm-12 col-md-6 col-md-6">
                    <SecondaryPart
                      image={<div className="image d-flex align-items-center justify-content-center rounded-3 p-2 border-0" style={{ background: "#80BD34" }}>
                        <img src={Profit} alt="image/Profit" />
                      </div>}
                      text={<p className='fw-medium'>Gəlir</p>}
                      price={<span className='fw-bold '>1200 ₼</span>}
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-md-6">
                    <SecondaryPart
                      image={<div className="image d-flex align-items-center justify-content-center rounded-3 p-2" style={{ background: "#FF921D" }}>
                        <img src={Cost} alt="image/Cost" />
                      </div>}
                      text={<p className='fw-medium'>Xərc</p>}
                      price={<span className='fw-bold'>500 ₼</span>}
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="item">
                      <div className='d-flex align-items-center gap-3'>
                        <div className="image d-flex align-items-center justify-content-center rounded-3 p-2 border-0" style={{ background: "#F2F8EB" }}>
                          <img src={Active} alt="image/Active" />
                        </div>
                        <div className="text mt-3">
                          <p className='fw-medium'>Satış aktivliyi</p>
                        </div>
                      </div>
                      <div className="percentage d-flex align-items-center gap-2">
                        <span className='fw-bold'>15.90%</span>
                        <img src={Percentage} alt="image/Percentage" />
                      </div>
                      <div className="analysis-table mt-3">
                        <LineChart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <div className="item">
                  <div className='d-flex align-items-center gap-3'>
                    <div className="image d-flex align-items-center justify-content-center rounded-3 p-2 border-0" style={{ background: "#FFF4E8" }}>
                      <img src={All} alt="image/All" />
                    </div>
                    <div className="text mt-3">
                      <p className='fw-medium'>Ümumi dövriyyə</p>
                    </div>
                  </div>
                  <div className="price">
                    <span className='fw-bold'>50.200 ₼</span>
                  </div>
                  <div className="pie-chart d-flex align-items-center gap-5" >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Analysis