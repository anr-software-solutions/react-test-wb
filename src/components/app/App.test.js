import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

describe('<App/>', () => {

  it('should render page title', () => {
    const title = "Repayments";
    const {getByText} = render(<App/>);
    expect(getByText(title)).toBeInTheDocument();
  });
});