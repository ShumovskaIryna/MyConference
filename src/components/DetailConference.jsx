import React, { useState, useCallback, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import GoogleMapCustom from './GoogleMapCustom';
import useHttp from '../useHttp';

export default function DetailConference() {
  const { id } = useParams();
  const { request } = useHttp();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const getConf = useCallback(async () => {
    const { data: conferenceToSet } = await request(`api/v1/conferences/get-by-id/${id}`, 'GET', null);
    setInputs(conferenceToSet);
  }, [request]);

  useEffect(() => {
    getConf();
  }, []);
  const deleteConf = useCallback(async () => {
    await request(`api/v1/conferences/delete/${id}`, 'DELETE', null);
    getConf();
  });
  const handelDel = async () => {
    await deleteConf(inputs.id);
  };
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
            id={inputs.id}
            className="delete-list"
            onClick={handelDel}
          />
          <NavLink
            to="../conference/:id/edit"
            className="edit-conference"
          >
            Edit
          </NavLink>
          <button className="back" color="green" type="button" onClick={() => { navigate('/', { replace: true }); }}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
