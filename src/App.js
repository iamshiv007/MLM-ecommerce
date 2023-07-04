import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NavigationMenu from './components/Layout/NavigationMenu';
import Header from './components/Layout/Header';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <div className='layout'>
          <div>
            <NavigationMenu />
          </div>
          <div>
            <Header />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
