import React from "react";
import "../assets/css/style.css";

const SimpleTable = ({ dataSource }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {dataSource.length ? (
          dataSource.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">No user data</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default SimpleTable;
