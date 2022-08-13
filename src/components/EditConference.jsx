import React
// , { useState, useEffect, useCallback }
  from 'react';
import flatpickr from 'flatpickr';
// import { useParams } from 'react-router-dom';
// import useHttp from '../useHttp';

export default function EditConference() {
  // const [inputs, setInputs] = useState([]);
  // const { id } = useParams();
  const config = {
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
    altInput: true,
    altFormat: 'F j, Y (h:S K)',
  };
  flatpickr('input[type=datetime-local]', config);
  // const { request } = useHttp();
  // const getConf = useCallback(async () => {
  //   const fetched = await request('/api/link/', 'GET', null);
  //   const { conferences: conferencesToSet } = fetched;
  //   setInputs(conferencesToSet);
  // }, [request]);
  // useEffect(() => {
  //   getConf();
  // }, []);

  return (
    <div>
      <h4>Edit your conference</h4>
      <form>
        <table>
          <tbody>
            <tr>
              <th>
                <h5>Title</h5>
              </th>
              <td>
                <input
                  // value={inputs.name}
                  className="form-name"
                  type="text"
                  name="name"
                />
              </td>
            </tr>
            <tr>
              <th>
                <h5>Date</h5>
              </th>
              <td>
                <input
                  className="form-control"
                  type="datetime-local"
                  // value={inputs.date}
                />
              </td>
            </tr>
            <tr>
              <th>
                <h5>Address</h5>
              </th>
              <td>
                <input
                  className="form-control"
                  type="text"
                  // value={inputs.location.lat}
                />
                <input
                  className="form-control"
                  type="text"
                  // value={inputs.location.lng}
                />
                <div id="map" />
              </td>
            </tr>
            <tr>
              <th>
                <h5>Country</h5>
              </th>
              <td>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Country"
                  // value={inputs.country}
                />
              </td>
            </tr>
            <tr>
              <th>
                <button type="button" className="btn btn-primary btn-lg">
                  Save
                </button>
              </th>
              <td>
                <button type="button" className="btn btn-secondary btn-lg">
                  Back
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
