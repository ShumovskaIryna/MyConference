/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Conference from './Conference';

function Conferences({ syncConferences }, props) {
  const { deleteConf } = props;
  if (!syncConferences.length) {
    return (
      <>
        {syncConferences.map((conference, index) => (
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
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    syncConferences: state.conferences.conferences,
  };
};
Conferences.propTypes = {
  syncConferences: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
    }),
  ).isRequired,
  deleteConf: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Conferences);
