/* eslint-disable */
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(255, "Name must not exceed 255 characters"),

  date: Yup.number()
    .required("Date is required")
    .test(
      "Is valid?",
      "Date is required",
      (value) => new Date(value).getTime() > 0
    ),
  lat: Yup.string()
    .required("Lat is required")
    .matches(
      /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/,
      "Not valid"
    ),
  lng: Yup.string()
    .required("Lat is required")
    .matches(
      /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/,
      "Not valid"
    ),

  country: Yup.string().required("Country is required"),
});

export default validationSchema;
