import React from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";

const Table = ({ rows, columns, uniqueId }) => {
  return (
    <div
      style={{
        width: 800,
        margin: "5rem 2rem",
        background: "white",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        autoPageSize
        pagination
        checkboxSelection={false}
        components={{
          Toolbar: GridToolbar,
        }}
        getRowId={(r) => r[uniqueId] || r.id}
      />
    </div>
  );
};

export default Table;
