import React from "react";
export default React.memo(function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th> Country </th>
          <th> parliamentary_constituency </th>
          <th> admin_district </th>
          <th> region </th>
          <th> Area </th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(props.data) &&
          props.data.map((item, index) => (
            <tr key={index}>
              <td>{item.country}</td>
              <td>{item.parliamentary_constituency}</td>
              <td>{item.admin_district}</td>
              <td>{item.region}</td>
              <td>{item.latitude < 52 ? "North" : "South"}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
});
