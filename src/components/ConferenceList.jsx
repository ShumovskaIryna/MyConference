/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { FaTrash } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';
import useHttp from '../useHttp';
import Conferences from './Conferences';

export default function ConferenceList() {
  const { request, loading } = useHttp();
  const [conferences, setConferences] = useState([]);

  const getConf = useCallback(async () => {
    const fetched = await request('/api/link/', 'GET', null);
    const { conferences: conferencesToSet } = fetched;
    setConferences(conferencesToSet);
  }, [request]);

  useEffect(() => {
    getConf();
  }, [getConf]);
  console.log(55, conferences, loading, loading, conferences?.length);

  if (loading || !conferences?.length) {
    return <div>LOOOOOOADING</div>;
  }
  return (
    loading
      ? <div>LOADING</div>
      : (
        <div>
          <table>
            <thead>
              <tr>
                <th className="col1">#</th>
                <th className="col2">Title</th>
                <th className="col3">Date</th>
                <th className="col4"> </th>
              </tr>
            </thead>
            <tbody>
              {/* {conferences.map((conference, index) => (
                <tr key={index}>
                  <td className="col1">{conference.id}</td>
                  <td className="col2">{conference.name}</td>
                  <td className="col3">{conference.date}</td>
                  <td className="col4">
                    <NavLink to="conference/:id/edit">
                      Edit
                    </NavLink>
                    <FaTrash
                      className="delete"
                    />
                  </td>
                </tr>
              ))} */}

              <Conferences
                allConferences={conferences}
              />

            </tbody>
          </table>
          <NavLink to="conference/create">+ New</NavLink>
        </div>
      )
  );
}
