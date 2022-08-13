import React from 'react';
import flatpickr from 'flatpickr';

export default function CreateConference() {
  const config = {
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
    altInput: true,
    altFormat: 'F j, Y (h:S K)',
  };
  flatpickr('input[type=datetime-local]', config);
  return (
    <div>
      <h4>Create a new conference yourself</h4>
      <form>
        <table>
          <tbody>
            <tr>
              <th>
                <h5>Title</h5>
              </th>
              <td>
                <input
                  className="form-name"
                  type="text"
                  name="title"
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
                  placeholder="Select Datetime"
                />
              </td>
            </tr>
            <tr>
              <th>
                <h5>Address</h5>
              </th>
              <td>
                <input placeholder="Latitude" />
                <input placeholder="Longitude" />
                <div id="map">
                  <img
                    src="map.png"
                    alt="map"
                    className="map"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <h5>Country</h5>
              </th>
              <td>
                <input
                  type="number"
                  className="form-control"
                  aria-label="Country"
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
