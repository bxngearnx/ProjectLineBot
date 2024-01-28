import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import UserModal from "./UserMoal";
import UserTable from "./UserTable";
import { userData } from "./__mock__";
import { useUser } from "./hooks";
import "./user.scss";

const columns: GridColDef[] = [
  { field: "email", headerName: "Email", minWidth: 350, maxWidth: 400 },
  { field: "password", headerName: "Password", width: 300 },
  {
    field: "permission",
    headerName: "Permission",
    width: 200,
    editable: true,
  },
  {
    field: "level",
    headerName: "Level",
    width: 100,
    editable: true,
  },
];

const User = () => {
  const [openModal, setOpenModal] = useState(false);
  const { form, onSubmit } = useUser();

  const handleCloseModal = () => {
    setOpenModal(false);
    form.reset();
  };

  return (
    <div className="intent">
      <div className="info">
        <h1>User</h1>
        <button onClick={() => setOpenModal(true)}>Add New</button>
      </div>
      <UserTable columns={columns} rows={userData} />

      <UserModal
        form={form}
        onSubmit={onSubmit}
        header="Add New User"
        open={openModal}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default User;
