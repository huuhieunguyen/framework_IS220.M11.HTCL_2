import '../stylesTable.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Table_Bill.propTypes = {
  List: PropTypes.array,
  List_Title_Head: PropTypes.array,
};
Table_Bill.defaultProps = {
  List: [],
  List_Title_Head: [],
};
export default function Table_Bill(props) {
  const HandleDelete = async (id) => {
    if (window.confirm('Bạn đã chắc chắn muốn xóa?')) {
      await document.getElementById(`${id}`).remove();
    }
  };
  const { List, List_Title_Head } = props;
  return (
    <>
    <div className='body_page'>
      <table className='itemTable'>
        <thead className='headerTable'>
          <tr>
            {List_Title_Head.map((item, index) => (
              <th key={index}>{item.Name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {List.map((item, index) => (
            <tr key={index} id={item.id}>
              <td>{item.invoice}</td>
              <td className='text_over'>{item.name}</td>
              <td>{item.company}</td>
              <td>{item.amount}</td>
              <td className='status status-delivering'>{item.status}</td>
              <td>
                <button
                  type='button'
                  className='btn btn-danger'
                  data-set={item.id}
                  onClick={() => HandleDelete(item.id)}>
                  Hủy
                </button>
              </td>
              <td>
                <button
                  type='button'
                  className='btn btn-warning'
                  data-set={item.id}>
                  Hoàn Tất
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <nav aria-label='Page navigation' className="Page navigation">
        <ul className='pagination'>
          <li className='page-item'>
            <Link className='page-link' to="/" aria-label='Previous'>
              <span aria-hidden='true'>&laquo;</span>
              <span className='sr-only'>Previous</span>
            </Link>
          </li>
          <li className='page-item'>
            <Link className='page-link' to="/">
              1
            </Link>
          </li>
          <li className='page-item'>
            <Link className='page-link' to="/">
              2
            </Link>
          </li>
          <li className='page-item'>
            <Link className='page-link' to="/">
              3
            </Link>
          </li>
          <li className='page-item'>
            <Link className='page-link' to="/" aria-label='Next'>
              <span aria-hidden='true'>&raquo;</span>
              <span className='sr-only'>Next</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
