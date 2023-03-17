import { apiRequest } from "../products/Api";
import { User, UsersData } from "./users";

export const getAllUsers = () => apiRequest<{}, UsersData>({ url: "users" });

export const getSingleUser = (id: number) =>
  apiRequest<{}, User>({ url: `users/${id}` });
