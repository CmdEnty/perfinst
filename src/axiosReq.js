import axios from "axios";

export const axiosReq = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true,
});

//   const { isLoading, isError, data, error } =
//     useQuery({
//       queryKey: ["todos"],
//       queryFn: fetchTodoList,
//     });
