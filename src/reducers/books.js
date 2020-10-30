import React from 'react';

const Books = () => (
  <table className="table table-hover w-75 shadow-lg my-4 rounded border">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Book ID</th>
        <th scope="col">Title</th>
        <th scope="col">Category</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </table>
);
export default Books;
