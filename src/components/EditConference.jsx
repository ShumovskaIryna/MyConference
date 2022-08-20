import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import useHttp from '../useHttp';
import Flatpickr from 'react-flatpickr';
import { FaTrash } from 'react-icons/fa';
import countryList from 'react-select-country-list';
import GoogleMapCustom from './GoogleMapCustom';
import { getConferenceById } from '../request';

export default function EditConference() {
  // const { id } = useParams();
  // const { request } = useHttp();
  const [inputs, setInputs] = useState({});

  const getConf = useCallback(async () => {
    const { data } = await getConferenceById('/api/link/', 'GET', null);
    const { conference: conferenceToSet } = data;
    setInputs(conferenceToSet);
  }, [getConferenceById]);

  useEffect(() => {
    getConf();
  }, []);
  const options = useMemo(() => countryList().getData(), []);
  const handleChange = () => {
  };
  const [center, setCenter] = useState({
    lat: inputs?.lat,
    lng: inputs?.lng,
  });
  return (
    <div>
      <h4>Edit meeting</h4>
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
                required
                minLength="2"
                maxLength="255"
                value={inputs.name}
              />
            </label>
            <div
              id="titleHelp"
              className="form-text"
            >
              Your title must be min 2, max 255 characters long.
            </div>
          </div>
          <div className="mb-3">
            Date
            <Flatpickr
              className="input"
              id="inputDate"
              options={{
                dateFormat: 'Y-m-d',
                altInput: true,
                altFormat: 'D, F j, Y',
                value: inputs.date,
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputAddress" className="form-label">
              Address
              <input
                type="number"
                className="form-control"
                id="inputAddress"
                name="lat"
                placeholder="Latitude"
                value={inputs?.lat}
                onChange={(event) => setCenter({ ...center, lat: Number(event.target.value) })
                }
              />
              <input
                type="number"
                className="form-control"
                id="inputAddress"
                name="lng"
                placeholder="Longitude"
                value={inputs?.lng}
                onChange={(event) => setCenter({ ...center, lng: Number(event.target.value) })
                }
              />
            </label>
            <GoogleMapCustom
              lat={inputs.lat}
              lng={inputs.lng}
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
                <option
                  value={inputs.country}
                >
                  {inputs.country}
                </option>
                {options.map((option) => (
                  <option
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mb-3">
            <NavLink
              to="/"
              className="save"
              // some logic to save on backend
            >
              Save
            </NavLink>
            <NavLink
              to="/"
              className="back"
            >
              Back
            </NavLink>
            <FaTrash
              className="delete"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
