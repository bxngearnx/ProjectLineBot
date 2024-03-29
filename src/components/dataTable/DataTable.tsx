import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss";
import { useNavigate } from "react-router-dom";

type Props = {
  columns: GridColDef[];
  rows: object[];
  isCheckboxSelection?: boolean;
};
const DataTable = ({ columns, rows, isCheckboxSelection = true }: Props) => {
  const navigate = useNavigate();
  const handleDelete = (id: number) => {
    //delete
    console.log(id + "has been deleted!");
  };
  const handleEdit = (id: number) => {
    //edit
    console.log(id + " has been edited!");
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <div
            className="edit"
            onClick={() => navigate(`/intent/${params.row.id}/detail`)}
          >
            <img src="/view.svg" alt="" />
          </div>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        pageSizeOptions={[5]}
        checkboxSelection={isCheckboxSelection}
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
