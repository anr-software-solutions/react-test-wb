import React from 'react';
import './Table.css'
import {DataGrid} from '@material-ui/data-grid';
import Footer from './Footer';

/**
 * Table columns.
 * If this Table component is common across application, this column should be moved from here.
 * Kept here for the sake of the coding test
 * @type column fields
 * */
const columns = [
  {field: 'date', headerName: 'DATE', width: 200, valueGetter: (params) =>
      `${new Date(params.getValue('date')).toLocaleDateString()}`},
  {field: 'description', headerName: 'TRANSACTION', sortable: false, width: 300},
  {field: 'amount', headerName: 'AMOUNT', type: 'number', sortable: false, width: 150, valueGetter: (params) =>
      `$${params.getValue('amount').toFixed(2)}`},
];

/**
 * Creates a grid with the data provided
 *
 * @param data  Array of data objects to be loaded as rows
 * @returns {JSX.Element} Data table with provided data
 */
const Table = ({data}) => {
  const getRows = () => {
    return data.map((record, index) => {
      record.id = index + 1;
      return record;
    });
  }

  return (
    <div style={{height: 300, maxWidth: 650}}>
      <DataGrid
        rows={getRows()}
        rowCount={data.length + 1}
        columns={columns}
        hideFooterRowCount
        hideFooterSelectedRowCount
        autoHeight
        components={{
          pagination: () => <Footer data={data}/>
        }}
      />
    </div>
  );
}

export default Table;