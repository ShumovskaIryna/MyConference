import React from "react";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import ConferenceList from "./components/ConferenceList";
import CreatePage from "./components/CreatePage";
import EditPage from "./components/EditPage";
// import { useRoutes } from './routes'

function App() {
  return (
    <div className="bg-dark text-muted">
      <div className="main">
      <BrowserRouter>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                exact>
                All Conferences
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="conference/create">
                + New
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            index
            element={<ConferenceList />}
          />
          <Route
            path="conference/create"
            element={<CreatePage />}
          />
          <Route
            path="conference/:id/edit"
            element={<EditPage />}
          />
        </Routes>
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
