import React from 'react';
import {
  BrowserRouter,
} from "react-router-dom";
import 'normalize.css';

import { Routes } from './pages/Routes';
import { Sidebar } from './pages/Sidebar/Sidebar';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
