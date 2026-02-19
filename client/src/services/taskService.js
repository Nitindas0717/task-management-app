import axios from "axios";

export const getTasks = async (token) => {
  const response = await axios.get("/api/tasks", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
