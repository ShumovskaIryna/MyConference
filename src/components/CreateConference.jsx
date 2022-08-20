/* eslint-disable no-undef */
/* eslint-disable no-shadow */
import React, { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Flatpickr from 'react-flatpickr';
import countryList from 'react-select-country-list';
// import { Wrapper } from '@googlemaps/react-wrapper';
// import { GoogleMap, Marker } from '@react-google-maps/api';
import MyCustomMap from './LocationMap';

export default function CreateConference() {
  const options = useMemo(() => countryList().getData(), []);
  const handleChange = () => {
  };

  const [center, setCenter] = useState({
    lat: 47.839984704870645,
    lng: 35.12596258205736,
  });

  return (
    <div>
      <h4>Create a new meeting</h4>
      <form>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="inputTitle" className="form-label">
              Title
              <input
                type="text"
                className="form-control"
                id="inputTitle"
                aria-describedby="titleHelp"
                placeholder="Give a title to this conference"
                required
                minLength="2"
                maxLength="255"
              />
            </label>
            <div id="titleHelp" className="form-text">Your title must be min 2, max 255 characters long.</div>
          </div>
          <div className="mb-3">
            Date
            <Flatpickr
              className="input"
              id="inputDate"
              s
              options={{
                dateFormat: 'Y-m-d',
                altInput: true,
                altFormat: 'D, F j, Y',
                defaultDate: new Date(),
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputAddress" className="form-label">
              Address
              <input type="number" className="form-control" id="inputAddress" placeholder="Latitude" />
              <input type="number" className="form-control" id="inputAddress" placeholder="Longitude" />
            </label>
            <MyCustomMap />
            <label htmlFor="lat">
              Latitude
              <input
                type="number"
                id="lat"
                name="lat"
                value={center?.lat}
                onChange={(event) => setCenter({ ...center, lat: Number(event.target.value) })
  }
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="inputCountry" className="form-label">
              Country
              <select
                className="form-select"
                onChange={handleChange}
                aria-label="Default select example"
              >
                {options.map((option) => (
                  <option value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mb-3">
            <NavLink to="/" className="save">Save</NavLink>
            <NavLink to="/" className="back">Back</NavLink>
          </div>
        </div>
      </form>
    </div>
  );
}
