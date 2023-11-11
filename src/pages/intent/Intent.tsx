import "./intent.scss"
import DataTable from '../../components/dataTable/DataTable'
import { GridColDef } from "@mui/x-data-grid";
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 350,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 350,
    editable: true,
  },



];
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime'},
  { id: 4, lastName: 'Stark', firstName: 'Arya' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
  { id: 6, lastName: 'Melisandre', firstName: 'Lone'},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara'},
  { id: 8, lastName: 'Frances', firstName: 'Rossini' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey' },
];

const Intent = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="intent">
        <div className="info">
          <h1>Intent</h1>
          <button onClick={()=>setOpen(true)}>Add New</button>
        </div>
        <DataTable columns={columns} rows={userRows}/>
        {open && <Add slug="intent" columns={columns} setOpen={setOpen} />} 
    </div>
  )
}

export default Intent