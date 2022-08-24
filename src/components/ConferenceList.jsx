import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useHttp from '../useHttp';
import Conferences from './Conferences';

export default function ConferenceList() {
  const { request, loading } = useHttp();
  const [conferences, setConferences] = useState([]);
  const getConf = useCallback(async () => {
    const fetchedResponse = await request('api/v1/conferences', 'GET', null);
    const { data } = fetchedResponse;
    console.log(fetchedResponse);
    const { conferences: conferencesToSet } = data;

    setConferences(conferencesToSet);
  }, [request]);

  const deleteConf = useCallback(async (id) => {
    await request(`api/v1/conferences/delete/${id}`, 'DELETE', null);
    getConf();
  });

  useEffect(() => {
    getConf();
  }, [getConf]);
  if (loading || !conferences?.length) {
    return (
      <div>
        <NavLink to="conference/create" className="new-conference">
          + New conference
        </NavLink>
      </div>
    );
  }
  return loading ? (
    <div>Loading......</div>
  ) : (
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
        <Conferences allConferences={conferences} deleteConf={deleteConf} />
      </table>
      <NavLink to="conference/create" className="new-conference">
        + New conference
      </NavLink>
    </div>
  );
}
