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

        <tbody>
          <tr>
            <td>Smith</td>
            <td>Male</td>
            <td>34</td>
            <td>Java</td>
            <td>Software Engineer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
