/* eslint-disable no-undef */
/* eslint-disable no-shadow */
import React, { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Flatpickr from 'react-flatpickr';
import countryList from 'react-select-country-list';
import GoogleMapCustom from './GoogleMapCustom';

export default function CreateConference() {
  const options = useMemo(() => countryList().getData(), []);
  const handleChange = () => {
  };
  const [center, setCenter] = useState({
    lat: undefined,
    lng: undefined,
  });
  //     if (userInput.length >= minlength && userInput.length <= maxlength) {
  //       return true;
  //     }
  //     alert(`Please input between ${minlength} and ${maxlength} characters`);
  //     return false;
  // }
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
            Address
            <label htmlFor="lat">
              <input
                type="number"
                className="form-control"
                placeholder="Latitude"
                id="lat"
                name="lat"
                value={center?.lat}
                onChange={(event) => setCenter({ ...center, lat: Number(event.target.value) })
  }
              />
            </label>
            <label htmlFor="lng">
              <input
                type="number"
                className="form-control"
                placeholder="Longitude"
                id="lng"
                name="lng"
                value={center?.lng}
                onChange={(event) => setCenter({ ...center, lng: Number(event.target.value) })
  }
              />
            </label>
            <GoogleMapCustom
              lat={center.lat}
              lng={center.lng}
            />
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
