import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import TabContainer from './TabContainer';

describe('<TabContainer/>', () => {
  it('TabContainer should be loaded with required number of tabs', () => {
    const numberOfTabs = 3;
    const {getAllByRole} = render(<TabContainer/>);
    expect(getAllByRole('tab')).toHaveLength(numberOfTabs);
  });

  it('TabContainer should be loaded with only selected tab panel', () => {
    const {getAllByRole} = render(<TabContainer/>);
    expect(getAllByRole('tabpanel')).toHaveLength(1);
  });

  it('When click on particular tab then corresponding tab content should be loaded', () => {
    const {getByText} = render(<TabContainer/>);
    const secondTab = getByText('Failed');
    fireEvent.click(secondTab);

    // 'Failed' tab should contain content with the type of 'FAILED'.
    // One of the row content is 'Quisque sodales lorem'
    const secondTabRowDescription = 'Quisque sodales lorem';
    expect(getByText(secondTabRowDescription)).toBeInTheDocument();
  });

  it('When click on particular tab then contents of other tabs should not be loaded', () => {
    const {getByText, queryByText} = render(<TabContainer/>);
    const thirdTab = getByText('Processed');
    fireEvent.click(thirdTab);

    // Third tab should not contain descriptions of second tab
    const secondTabRowDescription = 'Quisque sodales lorem';
    expect(queryByText(secondTabRowDescription)).not.toBeInTheDocument();
  });
});