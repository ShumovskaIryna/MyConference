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
    return <div>Loading......</div>;
  }
  return (
    loading
      ? <div>Loading......</div>
      : (
        <div>
          <h4>My Meetings</h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <Conferences
              allConferences={conferences}
            />
          </table>
          <NavLink to="conference/create" className="new-conference">+ New conference</NavLink>
        </div>
      )
  );
}
