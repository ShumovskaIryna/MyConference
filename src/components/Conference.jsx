/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

export default function Conference(props) {
  const { myConference } = props;
  const handeldel = (e) => {
    //  how to delete
    myConference.removeChild(e.myConference.id);
  };
  return (
    <tbody>
      <tr>
        <th scope="row">{myConference.id}</th>
        <td>
          {' '}
          <NavLink to="conference/:id/detail" className="list">
            {myConference.name}
          </NavLink>
        </td>
        <td>
          <NavLink to="conference/:id/detail" className="list">
            {myConference.date}
          </NavLink>
        </td>
        <td>
          <NavLink to="conference/:id/edit" className="edit-conference">
            Edit
          </NavLink>
          <FaTrash
            className="delete-list"
            onClick={handeldel}
          />
        </td>
      </tr>
    </tbody>
  );
}
