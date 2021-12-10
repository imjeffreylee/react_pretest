import React from 'react';
import ReactDOM from 'react-dom';
import CheckList from './components/CheckList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<CheckList />} /> */}
        <Route path="/checklist" element={<CheckList />} />
        {/* <Route path="/crud" element={<CheckList />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
