import React, { useContext, useState } from 'react'
import EntryDate from '../../assets/images/accountphoto/entryDate.png'
import Enter from '../../assets/images/accountphoto/enter.png'
import Profile from '../../assets/images/headerphoto/profile.png'
import Pencil from '../../assets/images/accountphoto/pencil.png'
import { UserContext } from '../../context/UserProvider'
import { Avatar, Upload } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const Account = () => {
  const userData = useContext(UserContext)
  const [imageUrl, setImageUrl] = useState(null);

  const handleChange = info => {
    const file = info.file.originFileObj;
    const reader = new FileReader();

    reader.onload = e => {
      setImageUrl(e.target.result);
    };

    reader.onerror = () => {
      message.error('Dosya yükleme hatası.');
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className='accountpage'>
      <div className="account p-4 rounded-3">
        <div className="heading">
          <h4 className='fw-bold'>Hesab</h4>
        </div>
        <div className="row g-3 mt-3">
          <div className="col-12 col-sm-12 col-md-6 col-lg-8">
            <div className="entry-dates">
              <div className="head d-flex align-items-center gap-2">
                <div className="img rounded-3 p-2" style={{ backgroundColor: "#FFF4E8" }}>
                  <img src={EntryDate} alt="image/EntryDate" />
                </div>
                <span>Giriş tarixləri</span>
              </div>
              {userData && userData.map(item => (
                <div className="enter d-flex align-items-center gap-3 mt-4">
                  <div className="img rounded-3 p-2" style={{ backgroundColor: "#F2F8EB" }}>
                    <img src={Enter} alt="image/Enter" />
                  </div>
                  <div className="content">
                    <h6 className='fw-bold'>{item.device}</h6>
                    <span style={{ fontSize: "14px" }} className='text-secondary'>{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-5 col-lg-4">
            <div className="user-data">
              <h5 className='fw-bold'>İstifadəçi məlumatları</h5>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <Avatar
                  size={61}
                  icon={<UserOutlined />}
                  src={imageUrl}
                />
                <Upload
                  showUploadList={false}
                  beforeUpload={() => false} // Prevent automatic upload
                  onChange={handleChange}
                >
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    cursor: 'pointer',
                  }}>
                    <img src={Pencil} alt="image/Pencil" />
                  </div>
                </Upload>
              </div>
              <div className="user-information mt-2">
                <form>
                  <div className="mb-2">
                    <label className="form-label fw-bold">Ad və Soyad</label>
                    <input type="email" className="form-control py-2" placeholder='Əli Əliyev' />
                  </div>
                  <div className="mb-2">
                    <label className="form-label fw-bold">E-mail</label>
                    <input type="text" className="form-control py-2" placeholder='Ferrum@mail.com' />
                  </div>
                  <div className="mb-2">
                    <label className="form-label fw-bold">Şifrə</label>
                    <input type="text" className="form-control py-2" placeholder='***********' />
                  </div>
                  <div className="mb-2">
                    <label className="form-label fw-bold">Yeni Şifrə</label>
                    <input type="text" className="form-control py-2" placeholder='***********' />
                  </div>
                  <button type="button" className="btn text-light w-100 py-2">Yadda saxla</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Account