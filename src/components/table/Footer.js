import React from 'react';
import './Footer.css'
import tabConstants from "../../constants/tabConstants";

/**
 * Custom footer component for table
 *
 * @param data Data array of the table
 * @returns {JSX.Element} Custom Footer
 */
const Footer = ({data}) => {
  const getTotalAmount = () => {
    return data.reduce((total, record) => total + record.amount, 0);
  }

  return (
    <div className="MuiDataGrid-footer footer-container">
      <div>
          <span className="item-font item-left">
            {`Total ${tabConstants[data[0]?.type]} Payments`}
          </span>
      </div>
      <div className="align-right">
          <span className="item-font item-right">
            {`$${getTotalAmount().toFixed(2)}`}
          </span>
      </div>
    </div>
  );
}

export default Footer;