import React from 'react';
import './App.css';
import Header from '../header/Header';
import TabContainer from '../tabs/TabContainer';

/**
 * This is the root. Loads header with logo, title and tab layout
 * @returns {JSX.Element}  Returns outer container with contents
 */
const App = () => {
  return (
    <div className="app">
      <Header/>
      <div className="app-contents">
        <h2>WorkBuddy Payments</h2>
        <TabContainer/>
      </div>
    </div>
  );
}

export default App;
