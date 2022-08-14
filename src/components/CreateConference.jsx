import React from 'react';
import Flatpickr from 'react-flatpickr';
// import 'flatpickr/dist/themes/dark.css';

export default function CreateConference() {
  return (
    <div>
      <h4>Create a new conference</h4>
      <form>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="inputTitle" className="form-label">
              Title
              <input type="text" className="form-control" id="inputTitle" aria-describedby="titleHelp" placeholder="Title" />
            </label>
            <div id="titleHelp" className="form-text">Your title must be min 2, max 255 characters long.</div>
          </div>
          <div className="mb-3">
            Date
            <Flatpickr
              className="input"
              id="inputDate"
              s
              options={{
                dateFormat: 'Y-m-d',
                altInput: true,
                altFormat: 'D, F j, Y',
                defaultDate: new Date(),
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputAddress" className="form-label">
              Address
              <input type="number" className="form-control" id="inputAddress" placeholder="Latitude" />
              <input type="number" className="form-control" id="inputAddress" placeholder="Longitude" />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="inputCountry" className="form-label">
              Country
              <input type="text" className="form-control" id="inputCountry" placeholder="Country" />
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
