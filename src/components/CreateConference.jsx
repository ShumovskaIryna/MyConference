/* eslint-disable no-undef */
/* eslint-disable */
import React, { useMemo, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import countryList from "react-select-country-list";
import GoogleMapCustom from "./GoogleMapCustom";
import useHttp from "../useHttp";

import validationSchema from "../validation/Conferences";

export default function CreateConference() {
  const countryOptions = useMemo(() => countryList().getData(), []);
  const navigate = useNavigate();
  const { request } = useHttp();

  const formik = useFormik({
    initialValues: {
      name: "",
      date: new Date().toISOString().substring(0, 16),
      lat: undefined,
      lng: undefined,
      country: countryOptions[0].label,
    },
    validationSchema,
    validateOnChange: false, // this one
    // validateOnBlur: false, // and this one
    onSubmit: async (values) => {
      const convertedValue = {
        ...values,
        date: new Date(values.date).getTime()
      }
      const response = await request("api/v1/conferences/add", "POST", convertedValue);
      const { errors } = response;
      if (!errors) {
        navigate("/", { replace: true });
      }
    },
  });
  const shouldShowMap = formik.values.lat !== undefined && formik.values.lng !== undefined;

  return (
    <div>
      <h4>Create a new meeting</h4>
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
            <input 
            type="datetime-local" 
            onChange={formik.handleChange}
            id="date" 
            name="date"
            value={formik.values.date}
            min={new Date().toISOString().substring(0, 16)} 
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
            {
            shouldShowMap
              ? (
                <GoogleMapCustom
                  lat={parseFloat(formik.values.lat)}
                  lng={parseFloat(formik.values.lng)}
                />
              )
              : null
           }
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
        <div className="mb-3">
        <button className="save" color="green" type="submit">
          Save
        </button>
        <button className="back" color="green" type="button" onClick={()=> {navigate("/", { replace: true });}}>
          Back
        </button>
         </div>
      </form>
    </div>
  );
}
