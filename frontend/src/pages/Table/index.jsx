/* eslint-disable react/destructuring-assignment */
import React from "react";
import { useLocation } from "react-router-dom";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";

const Table = (prop) => {
  console.log("prop is", prop);
  const location = useLocation();
  console.log("location is", location);
  return (
    <div
      style={{
        height: 400,
        width: "auto",
        margin: "5rem 2rem",
      }}
    >
      <DataGrid
        rows={prop?.location?.state?.rows}
        columns={prop?.location?.state?.columns}
        autoPageSize
        pagination
        checkboxSelection={false}
        components={{
          Toolbar: GridToolbar,
        }}
        getRowId={(r) => r[prop?.location?.state?.uniqueId] || r.id}
      />
    </div>
  );
};

export default Table;
