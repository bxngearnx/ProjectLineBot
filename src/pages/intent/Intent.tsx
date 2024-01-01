import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable";
import "./intent.scss";
import { intentsData } from "./__mock__";

const columns: GridColDef[] = [
  { field: "id", headerName: "Intent ID", width: 90 },
  {
    field: "intentName",
    headerName: "Display Name",
    width: 350,
    editable: true,
  },
  // {
  //   field: "lastName",
  //   headerName: "Last name",
  //   width: 350,
  //   editable: true,
  // },
];

const Intent = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="intent">
      <div className="info">
        <h1>Intent</h1>
        <button onClick={() => setOpen(true)}>Add New</button>
      </div>
      <DataTable columns={columns} rows={intentsData} />
      {open && <Add slug="intent" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Intent;
