/* eslint-disable jsx-a11y/alt-text */
import Fade from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import React, { useContext, useState } from 'react';
import { context } from '../../app/Context';
import Customers from '../Customers/index';
import './stylesUpdateComponent/UpdateCustomers.scss';
function UpdateCustomer(props) {
  const Context = useContext(context);
  const { setBodyAdmin, setFillerAdmin } = Context;
  const [valueData, setValueData] = useState({
    Id: '',
    Name: '',
    Email: '',
    Phone: '',
    Gender:'',
    Address:''
  });

  const { id } = props;
  function Prev() {
    setBodyAdmin(<Customers />);
    setFillerAdmin('CUSTOMERS');
  }
  const handleChange = (event) => {
    setValueData({ ...valueData, [event.target.name]: [event.target.value] });
  };
  return (
    <div className='UpdateCustomers'>
      <Fade in={true} timeout={200} style={{ height: '100%' }}>
        <Paper>
          <button
             style={{width:'fit-content',position:'absolute'}}
            type='button'
            className='btn btn-success d-flex gap-2'
            onClick={() => Prev()}>
            <i
              style={{ fontSize: '1.5rem' }}
              className='fad fa-chevron-circle-left'></i>
            <p className> Quay lại</p>
          </button>
          <h2 className='text-center pt-4'>Cập nhật khách hàng </h2>
          <p  style={{width:'60%',margin:'0 auto'}}>Mã khách hàng:{id}</p>
          <div className='dataUpdate'>
            
            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control '
                name='Name'
                color='warning'
                value={valueData.Name}
                onChange={handleChange}
              />
              <label htmlFor='floatingInput'>Họ và Tên</label>
            </div>
            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control '
                name='Email'
                color='warning'
                value={valueData.Email}
                onChange={handleChange}
              />
              <label htmlFor='floatingInput'>Email</label>
            </div>
            <div className='form-floating mb-3 inputData' >
              <input
                type='text'
                className='form-control '
                name='Phone'
                color='warning'
                value={valueData.Phone}
                onChange={handleChange}
              />
              <label htmlFor='floatingInput'>Số điện thoại</label>
            </div>
            <div className='form-floating mb-3 inputData' >
              <input
                type='text'
                className='form-control '
                name='Address'
                color='warning'
                value={valueData.Address}
                onChange={handleChange}
              />
              <label htmlFor='floatingInput'>Địa chỉ</label>
            </div>
            <div className='form-floating mb-3 inputData' >
              <select  className='form-control '
                name='Gender'
                color='warning'
                value={valueData.Gender}
                onChange={handleChange}>

                  <option value="1">Nam</option>
                  <option value="0">Nữ</option>
                </select>
             
              <label htmlFor='floatingInput'>Giới tính</label>
            </div>
            
           </div>
        </Paper>
      </Fade>
    </div>
  );
}

export default UpdateCustomer;
