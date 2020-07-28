import React from "react";

const Row = ({ row, schema }) => {
  return (
    <tr>
      {schema.map((idx) => (
        <td key={idx}>{row[idx.name]}</td>
      ))}
    </tr>
  );
};

export default Row;
