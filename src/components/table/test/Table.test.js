import React from 'react';
import {render} from '@testing-library/react';
import Table from '../Table';

const data = [
  {
    "date": "2020-08-27T11:42:10+10:00",
    "type": "PROCESSED",
    "description": "Praesent urna elit",
    "amount": 250
  },
  {
    "date": "2020-08-26T10:01:10+10:00",
    "type": "PROCESSED",
    "description": "Phasellus accumsan vehicula",
    "amount": 12.50
  },
  {
    "date": "2020-08-26T09:00:10+10:00",
    "type": "PROCESSED",
    "description": "Nam sollicitudin",
    "amount": 9.10
  }
]

describe('<Table/>', () => {
  it('When data is provided then Table should load', () => {
    const {getByRole} = render(<Table data={data}/>);
    expect(getByRole('grid')).toBeInTheDocument();
  });

  it('When Table loads then all rows should be in viewport', () => {
    const numberOfRows = 4;   // three data rows plus footer row
    const {getAllByRole} = render(<Table data={data}/>);
    expect(getAllByRole('row')).toHaveLength(numberOfRows);
  });

  it('When Table loads then `date` should be properly formatted', () => {
    const formattedDate = '8/27/2020';
    const {getByText} = render(<Table data={data}/>);

    expect(getByText(formattedDate)).toBeInTheDocument();
  });

  it('When Table loads then `amount` should be properly formatted', () => {
    const formattedAmount = '$250.00';
    const {getByText} = render(<Table data={data}/>);

    expect(getByText(formattedAmount)).toBeInTheDocument();
  });
});