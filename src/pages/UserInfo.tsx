import { CircularProgress } from "@mui/material";

import { isError, useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { getSingleUser } from "../api/users/users.client";
import { ErrorMessage } from "../components/shared/ErrorMessage";

export const UserInfo = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery(["users", id], () =>
    getSingleUser(Number(id))
  );

  const {
    firstName,
    lastName,
    maidenName,
    age,
    gender,
    email,
    phone,
    username,
    password,
  } = data?.data || {};

  return (
    <div>
      {isLoading && <CircularProgress />}

      {isError && <ErrorMessage message="The error 400 " />}

      {data && (
        <>
          <h1>First Name: {firstName}</h1>
          <h1>Last Name: {lastName}</h1>
          <h1>Maiden Name: {maidenName}</h1>
          <h1>Age: {age}</h1>
          <h1>Gender: {gender}</h1>
          <h1>Email: {email}</h1>
          <h1>Email: {phone}</h1>
          <h1>Username: {username}</h1>
          <h1>Password: {password}</h1>
        </>
      )}
    </div>
  );
};
