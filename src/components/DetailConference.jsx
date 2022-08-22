import React, { useState, useCallback, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { getConferenceById } from '../request';
import GoogleMapCustom from './GoogleMapCustom';
// import { useParams } from 'react-router-dom';
// import useHttp from '../useHttp';

export default function DetailConference() {
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

  return (
    <div>
      <h4>Detail about meeting</h4>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="inputTitle" className="form-label">
            Title
            <input
              type="text"
              className="form-control"
              id="inputTitle"
              aria-describedby="titleHelp"
              disabled
              value={inputs?.name}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="inputTitle" className="form-label">
            Date
            <input
              type="text"
              className="form-control"
              id="inputTitle"
              aria-describedby="titleHelp"
              disabled
              value={inputs?.date}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="inputAddress" className="form-label">
            Address
            <input
              type="number"
              className="form-control"
              id="inputAddress"
              name="lat"
              value={inputs?.lat}
            />
            <input
              type="number"
              className="form-control"
              id="inputAddress"
              name="lng"
              value={inputs?.lng}
            />
          </label>
          <GoogleMapCustom
            lat={inputs?.lat}
            lng={inputs?.lng}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputCountry" className="form-label">
            Country
            <select
              className="form-select"
              aria-label="Default select example"
            >
              <option
                value={inputs?.country}
              >
                {inputs?.country}
              </option>
              ))
            </select>
          </label>
        </div>

        <div className="mb-3">
          <FaTrash
            className="delete"
          />
          <NavLink
            to="../conference/:id/edit"
            className="edit-conference"
          >
            Edit
          </NavLink>
          <NavLink
            to="/"
            className="back"
          >
            Back
          </NavLink>
        </div>
      </div>
    </div>
  );
}
