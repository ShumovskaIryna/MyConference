/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

export default function Conference(props) {
  const { myConference, deleteConf } = props;

  const handelDel = async () => {
    await deleteConf(myConference.id);
  };
  return (
    <tbody>
      <tr>
        <th scope="row">{myConference.id}</th>
        <td>
          {' '}
          <NavLink to={`conference/${myConference.id}/detail`} className="list">
            {myConference.name}
          </NavLink>
        </td>
        <td>
          <NavLink to={`conference/${myConference.id}/detail`} className="list">
            {new Date(parseInt(myConference.date, 10)).toLocaleDateString()}
          </NavLink>
        </td>
        <td>
          <NavLink
            to={`conference/${myConference.id}/edit`}
            className="edit-conference"
          >
            Edit
          </NavLink>
          <FaTrash
            id={myConference.id}
            className="delete-list"
            onClick={handelDel}
          />
        </td>
      </tr>
    </tbody>
  );
}
