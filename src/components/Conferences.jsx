/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Conference from './Conference';

export default function Conferences(props) {
  const { allConferences, deleteConf } = props;
  return (
    <>
      {allConferences.map((conference, index) => (
        <Conference
          key={index}
          myConference={conference}
          deleteConf={deleteConf}
          orderId={index}
        />
      ))}
    </>
  );
}
Conferences.propTypes = {
  allConferences: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
    }),
  ).isRequired,
  deleteConf: PropTypes.func.isRequired,
};
