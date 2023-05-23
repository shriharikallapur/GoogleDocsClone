import React from 'react';
import { DocsPage } from './docsPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={ <Navigate to={`/doc/${uuidV4()}`} /> }
        />
        <Route
          path='/doc/:id'
          element={ <DocsPage /> }
        />          
      </Routes>
    </Router>
  )
}