/* eslint-disable */

import React, { useMemo, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import countryList from "react-select-country-list";
import Flatpickr from "react-flatpickr";
import validationSchema from "../validation/Conferences";
import useHttp from "../useHttp";
import MyCustomMap from "./GoogleMapCustom";
export default function EditConference(props) {
  const { id } = useParams();
  const [inputs, setInputs] = useState({});
  const { request } = useHttp();
  const navigate = useNavigate();

  const getConf = useCallback(async () => {
    const { data: conferenceToSet } = await request(
      `api/v1/conferences/get-by-id/${id}`,
      "GET"
    );
    setInputs(conferenceToSet);
  }, [request]);

  useEffect(() => {
    getConf();
  }, []);

  const countryOptions = useMemo(() => countryList().getData(), []);

  const formik = useFormik({
    initialValues: {
      name: inputs.name,
      date: inputs.date,
      lat: inputs.lat,
      lng: inputs.lng,
      country: inputs.country,
    },
    enableReinitialize: true,
    validationSchema,
    validateOnChange: false, // this one
    onSubmit: async (values) => {
      await request(`/api/v1/conferences/update/${id}`, "PUT", values);
      navigate("/", { replace: true });
    },
  });

  return (
    <div>
      <h4>Edit meeting</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="inputTitle" className="form-label">
              Title
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </label>

            <div className="text-danger">
              {formik.errors.name ? formik.errors.name : null}
            </div>
          </div>

          <div className="mb-3">
            Date
            <Flatpickr
              className="input"
              id="inputDate"
              onChange={formik.handleChange}
              name="date"
              value={+formik.values.date}
              options={{
                minDate: "today",
                dateFormat: "Y-m-d",
                altInput: true,
                altFormat: "D, F j, Y",
                defaultDate: formik.values.date,
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputAddress" className="form-label">
              Address
              <input
                id="inputAddress"
                name="lat"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.lat}
                className="form-control"
                placeholder="Latitude"
              />
              <div className="text-danger">
                {formik.errors.lat ? formik.errors.lat : null}
              </div>
              <input
                id="inputAddress"
                name="lng"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.lng}
                className="form-control"
                placeholder="Longitude"
              />
              <div className="text-danger">
                {formik.errors.lng ? formik.errors.lng : null}
              </div>
            </label>
            <MyCustomMap
              lat={parseFloat(formik.values.lat)}
              lng={parseFloat(formik.values.lng)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputCountry" className="form-label">
              Country
              <select
                className="form-select"
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
                aria-label="Default select example"
              >
                {countryOptions.map((option) => (
                  <option value={option.label}>{option.label}</option>
                ))}
              </select>
              <div className="text-danger">
                {formik.errors.country ? formik.errors.country : null}
              </div>
            </label>
          </div>
        </div>
        <button className="save" color="green" type="submit">
          Save
        </button>
        <button className="back" color="green" type="button" onClick={() => { navigate('/', { replace: true }); }}>
            Back
          </button>
      </form>
    </div>
  );
}
