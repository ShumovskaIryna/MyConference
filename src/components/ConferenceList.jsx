import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
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
  if (loading || !conferences?.length) {
    return <div>LOOOOOOADING</div>;
  }
  return (
    loading
      ? <div>LOADING</div>
      : (
        <div>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Date</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
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
