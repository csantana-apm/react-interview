import * as React from 'react';

const Table = () => {
  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Skills</th>
          <th>Designation</th>
        </thead>

        <tbody>{/* Here add the users rows */}</tbody>
      </table>
    </div>
  );
};

export default Table;
