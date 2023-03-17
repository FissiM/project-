// export const login = (username: string, password: string) =>
//   fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       username,
//       password,
//     }),
//   });

import { apiRequest } from "../products/Api";

export const login = (username: string, password: string) =>
  apiRequest({
    method: "POST",
    url: "auth/login",
    data: { username, password },
  });
