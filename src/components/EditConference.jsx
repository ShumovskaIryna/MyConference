import React
, { useState, useEffect, useCallback }
  from 'react';
// import { useParams } from 'react-router-dom';
// import useHttp from '../useHttp';
import Flatpickr from 'react-flatpickr';
// import 'flatpickr/dist/themes/dark.css';

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
  return (
    <div>
      <h4>Edit the conference</h4>
      <form>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="inputTitle" className="form-label">
              Title
              <input type="text" className="form-control" id="inputTitle" aria-describedby="titleHelp" value={inputs.name} />
            </label>
            <div id="titleHelp" className="form-text">Your title must be min 2, max 255 characters long.</div>
          </div>
          <div className="mb-3">
            Date
            <Flatpickr
              options={{
                dateFormat: 'Y-m-d',
                altInput: true,
                altFormat: 'D, F j, Y',
                defaultDate: inputs.date,
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputAddress" className="form-label">
              Address
              <input type="number" className="form-control" id="inputAddress" placeholder="Latitude" value={inputs.location?.lat} />
              <input type="number" className="form-control" id="inputAddress" placeholder="Longitude" value={inputs.location?.lng} />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="inputCountry" className="form-label">
              Country
              <input type="text" className="form-control" id="inputCountry" placeholder="Country" value={inputs.country} />
            </label>
          </div>

          <div className="mb-3">
            <button type="button" className="btn btn-primary btn-lg">
              Save
            </button>
            <button type="button" className="btn btn-secondary btn-lg">
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
