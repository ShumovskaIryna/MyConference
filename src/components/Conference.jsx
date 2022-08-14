/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

export default function Conference(props) {
  const { myConference } = props;
  return (
    <tbody className="table-dark">
      <tr className="table-dark">
        <td className="col1">{myConference.id}</td>
        <td className="col2">{myConference.name}</td>
        <td className="col3">{myConference.date}</td>
        <td className="col4">
          <NavLink to="conference/:id/edit">
            Edit
          </NavLink>
          <FaTrash
            className="delete"
          />
        </td>
      </tr>
    </tbody>
  );
}
