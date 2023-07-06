import React, { Fragment, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import NavigationMenu from './components/Layout/NavigationMenu';
import Header from './components/Layout/Header';
import AppUsers from './components/pages/Users';
import GeniusCoinRate from './components/pages/GeniusCoinRate';
import TotalSellCoin from './components/pages/TotalSellCoin';
import UserCoins from './components/pages/UserCoins';
import RegisteredUsers from './components/pages/RegisteredUser';
import UploadBanners from './components/pages/UploadBanners';
import DailyGeniusCoinRate from './components/pages/DailyGeniusCoinRate';

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
              <Route exact path="/userCoins" element={<UserCoins />} />
              <Route exact path="/registeredUsers" element={<RegisteredUsers />} />
              <Route exact path="/uploadBanners" element={<UploadBanners />} />
              <Route exact path="/dailyGeniusCoinRate" element={<DailyGeniusCoinRate />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
