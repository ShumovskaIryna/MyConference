import React, { useState, useCallback, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { getConferenceById } from '../request';
import GoogleMapCustom from './GoogleMapCustom';

export default function DetailConference() {
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
      <form>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Datetime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                scope="row"
              >
                {inputs.id}
              </th>
              <td>
                {inputs.name}
              </td>
              <td>
                {inputs.date}
              </td>
            </tr>
          </tbody>
        </table>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Location</th>
              <th scope="col">Google Maps</th>
              <th scope="col"> </th>
              <th scope="col">Country</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Latitude
                {' '}
                {inputs.lat}
                {' '}
                Longitude
                {' '}
                {inputs.lng}
              </td>
              <td>
                <GoogleMapCustom
                  lat={inputs.lat}
                  lng={inputs.lng}
                />
              </td>
              <td> </td>
              <td>{inputs.country}</td>
            </tr>
          </tbody>
        </table>
        <FaTrash
          className="delete"
        />
        <NavLink to="conference/:id/edit" className="edit-conference">
          Edit
        </NavLink>
        <NavLink to="/" className="back right">Back</NavLink>
      </form>
    </div>
  );
}
