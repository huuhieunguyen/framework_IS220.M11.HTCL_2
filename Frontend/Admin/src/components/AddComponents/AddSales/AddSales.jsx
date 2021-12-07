/* eslint-disable jsx-a11y/alt-text */
import Fade from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import { useSnackbar } from 'notistack';
import React, { useContext, useState } from 'react';
import { context } from './../../../app/Context';
import Sales from './../../Sales/index';
import './styles.scss';
function AddSale(props) {
 
  const Context = useContext(context);
  const { setBodyAdmin, setFillerAdmin} = Context;
  const { enqueueSnackbar } = useSnackbar();
  const [valueData, setValueData] = useState({
    Name: '',
    Age:'',
    Gender:'',
    Phone:'',
    Email:'',
    Address:'',
    City:'',
    Country:'',
    Salary:'',
    StoreId:''
  });
  const handleChangeData = (event) => {
    setValueData({ ...valueData, [event.target.name]: [event.target.value].toString() });
  };

   const HandleUpload = () => {
 
      enqueueSnackbar('Tải lên thành công', { variant: 'success' });
 
  };
  function Prev() {
    setBodyAdmin(<Sales />);
    setFillerAdmin('SALES');
  }
  return (
    <div className='AddSale'>
       
      <Fade in={true} timeout={200} style={{ height: '100%' }}>
        <Paper>
        <button
            type='button'
            className='btn btn-success d-flex gap-2'
            style={{position:"absolute" }}
            onClick={() => Prev()}>
            <i
              style={{ fontSize: '1.5rem'}}
              className='fad fa-chevron-circle-left'></i>
            <p className> Quay lại</p>
          </button>
          <h2 className='text-center pt-4 '>Thêm nhân viên mới</h2>

          <div className='dataAdd'>
            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control '
                name='Name'
                color='warning'
                value={valueData?.Name}
                onChange={handleChangeData}
              />
              <label htmlFor='floatingInput'>Họ và tên</label>
            </div>

            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control'
                name='Age'
                color='warning'
                value= {valueData?.Age}
                onChange={handleChangeData}
              />
             
              <label htmlFor='floatingInput'>Tuổi</label>
            </div>
            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control '
                name='Phone'
                color='warning'
                value={valueData?.Phone}
                onChange={handleChangeData}
              />
              <label htmlFor='floatingInput'>Phone</label>
            </div>
            <div className='form-floating mb-3 inputData'>
              <input
                type='Email'
                className='form-control '
                name='Email'
                color='warning'
                value={valueData?.Email}
                onChange={handleChangeData}
              />
              <label htmlFor='floatingInput'>Email</label>
            </div>
            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control '
                name='Address'
                color='warning'
                value={valueData?.Address}
                onChange={handleChangeData}
              />
              <label htmlFor='floatingInput'>Address</label>
            </div>
            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control '
                name='City'
                color='warning'
                value={valueData?.City}
                onChange={handleChangeData}
              />
              <label htmlFor='floatingInput'>City</label>
            </div>
            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control '
                name='Country'
                color='warning'
                value={valueData?.Country}
                onChange={handleChangeData}
              />
              <label htmlFor='floatingInput'>Country</label>
            </div>
            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control '
                name='Salary'
                color='warning'
                value={valueData?.Salary}
                onChange={handleChangeData}
              />
              <label htmlFor='floatingInput'>Salary</label>
            </div>
          
        
          
            <div className="button__submit">
              <button type="submit" className='btn btn-success' style={{minWidth:"200px",width:'100%'}} onClick={HandleUpload}>Thêm nhân viên</button>
            </div>
          </div>
        </Paper>
      </Fade>
    </div>
  );
}

export default AddSale;
