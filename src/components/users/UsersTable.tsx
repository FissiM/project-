import { useNavigate } from "react-router-dom";
import { UsersData } from "../../api/users/users";

import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 160 },
  { field: "lastName", headerName: "Last name", width: 160 },
  { field: "maidenName", headerName: "MaidenName", width: 160 },
  {
    field: "age",
    headerName: "Age",
    align: "left",
    headerAlign: "left",
    width: 100,
  },
  { field: "gender", headerName: "Gender", width: 130 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone", width: 160 },
  { field: "username", headerName: "Username", width: 160 },
  { field: "password", headerName: "Password", width: 160 },
  { field: "birthDate", headerName: "BirthDate", width: 160 },
];

export const UsersTable = ({ data }: UsersData) => {
  const navigate = useNavigate();

  const rows = data.map((user) => {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      maidenName: user.maidenName,
      age: user.age,
      gender: user.gender,
      email: user.email,
      phone: user.phone,
      username: user.username,
      password: user.password,
      birthDate: user.birthDate,
    };
  });

  const handleRowDoubleClick = (id: number) => {
    navigate(`/users/${id}`);
  };

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        onRowDoubleClick={(user: any) => handleRowDoubleClick(user.id)}
      />
    </div>
  );
};
