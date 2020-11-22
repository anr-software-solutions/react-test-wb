import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import TabContainer from './TabContainer';
import {waitFor} from "@testing-library/dom";

describe('<TabContainer/>', () => {
  it('TabContainer should be loaded with required number of tabs', async () => {
    const numberOfTabs = 3;
    const {getAllByRole} = render(<TabContainer/>);
    await waitFor(() => {
      expect(getAllByRole('tab')).toHaveLength(numberOfTabs);
    });
  });

  it('TabContainer should be loaded with only selected tab panel', async () => {
    const {getAllByRole} = render(<TabContainer/>);
    await waitFor(() => {
      expect(getAllByRole('tabpanel')).toHaveLength(1);
    })
  });

  it('When click on particular tab then corresponding tab content should be loaded', async () => {
    const {getByText} = render(<TabContainer/>);
    await waitFor(() => {
      expect(getByText('Failed')).toBeInTheDocument()
    })
    const secondTab = getByText('Failed');
    fireEvent.click(secondTab);

    // 'Failed' tab should contain content with the type of 'FAILED'.
    // One of the row content is 'Quisque sodales lorem'
    const secondTabRowDescription = 'Quisque sodales lorem';
    expect(getByText(secondTabRowDescription)).toBeInTheDocument();
  });

  it('When click on particular tab then contents of other tabs should not be loaded', async () => {
    const {getByText, queryByText} = render(<TabContainer/>);
    await waitFor(() => {
      expect(getByText('Processed')).toBeInTheDocument()
    });
    const thirdTab = getByText('Processed');
    fireEvent.click(thirdTab);

    // Third tab should not contain descriptions of second tab
    const secondTabRowDescription = 'Quisque sodales lorem';
    expect(queryByText(secondTabRowDescription)).not.toBeInTheDocument();
  });
});