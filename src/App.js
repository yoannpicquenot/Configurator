import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import 'normalize.css';

import { Routes } from './components/Routes';
import Sidebar from './components/Sidebar/Sidebar';

import './App.css';

/* eslint-disable */
function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
