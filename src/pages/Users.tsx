import { useQuery } from "react-query";
import { getAllUsers } from "../api/users/users.client";
import { UsersTable } from "../components/users/UsersTable";
import { ErrorMessage } from "../components/shared/ErrorMessage";
import { CircularProgress } from "@mui/material";

export const Users = () => {
  const { data, isLoading, error } = useQuery("users", getAllUsers);

  return (
    <div style={{ width: "100%" }}>
      <h1>Users</h1>

      {isLoading && <CircularProgress />}

      <>{error && <ErrorMessage message="Error" />}</>

      {data && <UsersTable data={data.data.users} />}
    </div>
  );
};
