import React from 'react';
import './TabContainer.css'
import {AppBar, Tab} from '@material-ui/core';
import {TabContext, TabList, TabPanel} from '@material-ui/lab';

import useJsonData from "../../data/useJsonData";
import data from '../../data/data.json';
import tabConstants from "../../constants/tabConstants";
import Table from "../table/Table";

/**
 * Tab Container which contains tabs and corresponding table content
 *
 * @returns {JSX.Element} Tabs with content
 */
const TabContainer = () => {
  const [value, setValue] = React.useState('1');
  const {getTypes, getDataByType} = useJsonData(data);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getTabList = () => {
    return getTypes().map((type, index) => <Tab key={index} label={tabConstants[type]} value={(index + 1).toString()} className="tab-item"/>)
  };

  const getTabPanelList = () => {
    return getTypes().map((type, index) => {
      return (
        <TabPanel key={index} value={(index + 1).toString()}>
          <Table data={getDataByType(type)}/>
        </TabPanel>
      )
    })
  };

  return (
    <div className="tab-container">
      <TabContext value={value}>
        <AppBar position="static" className="tab-bar">
          <TabList onChange={handleChange} className="tab-list">
            {getTabList()}
          </TabList>
        </AppBar>
        {getTabPanelList()}
      </TabContext>
    </div>
  );
};

export default TabContainer;