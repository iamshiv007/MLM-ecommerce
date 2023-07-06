import React, { Fragment, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import NavigationMenu from './components/Layout/NavigationMenu';
import Header from './components/Layout/Header';
import AppUsers from './components/pages/Users';
import GeniusCoinRate from './components/pages/GeniusCoinRate';
import TotalSellCoin from './components/pages/TotalSellCoin';

function App() {

  const [navDisplay, setNavDisplay] = useState("block");
  const [pageWidth, setPageWidth] = useState("80%");

  return (
    <Fragment>
      <BrowserRouter>
        <div className='layout'>
          <div style={{ display: navDisplay }}>
            <NavigationMenu />
          </div>
          <div className='rightSide' style={{ width: pageWidth }}>
            <Header setNavDisplay={setNavDisplay} setPageWidth={setPageWidth} navDisplay={navDisplay} pageWidth={pageWidth} />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/users" element={<AppUsers />} />
              <Route exact path="/geniusCoinRate" element={<GeniusCoinRate />} />
              <Route exact path="/totalSellCoin" element={<TotalSellCoin />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
