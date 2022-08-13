/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Conference from './Conference';

export default function Conferences(props) {
  const { allConferences } = props;
  return (
  // <div className="conferences">
    <>

      {allConferences.map((conference, index) => (
        <Conference
          key={index}
          myConference={conference}
        />
      ))
  }
    </>
  // </div>
  );
}

Conferences.propTypes = {
  allConferences: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
  })).isRequired,
};