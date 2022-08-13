/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

export default function Conference(props) {
  const { myConference } = props;
  console.log('dddd', myConference);
  return (
    <tbody>
      <tr>
        <td className="col1">{myConference.id}</td>
        <td className="col2">{myConference.name}</td>
        <td className="col3">{myConference.date}</td>
        {/* <td className="col4">
        <NavLink to="conference/:id/edit">
          Edit
        </NavLink>
        <FaTrash
          className="delete"
        />
      </td> */}
      </tr>
    </tbody>
  );
}
