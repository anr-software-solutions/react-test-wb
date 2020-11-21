import React from 'react';
import {render} from '@testing-library/react';
import Footer from '../Footer';

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

describe('<Footer/>', () => {
  it('`getTotalAmount` should return sum of provided amounts', () => {
    // test sum is sum of amounts. i.e. 250 + 12.50 + 9.10
    const testSum = '$271.60';

    const {getByText} = render(<Footer data={data}/>);
    expect(getByText(testSum)).toBeInTheDocument();
  });
});