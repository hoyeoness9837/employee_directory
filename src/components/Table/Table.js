import React from 'react';

const Table = (props) => {
  return (
    <tr>
      <td>{props.employee.id}</td>
      <td>{props.employee.last_name}</td>
      <td>{props.employee.first_name}</td>
      <td>{props.employee.email}</td>
    </tr>
  );
};

export default Table;
