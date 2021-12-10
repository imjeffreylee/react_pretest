import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Crud from './pages/Crud';
import CssDemoI from './pages/CssDemoI';
import CssDemoII from './pages/CssDemoII';
import CheckList from './pages/CheckList';
import SideMenu from './components/SideMenu';
import GlobalCSS from './components/styles/Global.styled';
import { ContentContainer } from './components/styles/ContentContainer.styled';

ReactDOM.render(
  <React.StrictMode>
    <GlobalCSS />
    <BrowserRouter>
      <SideMenu />
      <ContentContainer>
        <Routes>
          <Route path="/" element={<CssDemoI />} />
          <Route path="/demoii" element={<CssDemoII />} />
          <Route path="/checklist" element={<CheckList />} />
          <Route path="/crud" element={<Crud />} />
        </Routes>
      </ContentContainer>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
