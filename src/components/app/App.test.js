import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

describe('<App/>', () => {

  it('should render page title', () => {
    const title = "WorkBuddy Payments";
    const {getByText} = render(<App/>);
    expect(getByText(title)).toBeInTheDocument();
  });
});