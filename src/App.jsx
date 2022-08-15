/* eslint-disable object-curly-newline */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConferenceList from './components/ConferenceList';
import CreateConference from './components/CreateConference';
import DetailConference from './components/DetailConference';
import EditConference from './components/EditConference';

function App() {
  return (
    <div className="bg-dark text-muted">
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route index element={<ConferenceList />} />
            <Route path="conference/create" element={<CreateConference />} />
            <Route path="conference/:id/edit" element={<EditConference />} />
            <Route path="conference/:id/detail" element={<DetailConference />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
