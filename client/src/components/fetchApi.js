import AxiosWithAuth from "../utils/AxiosWithAuth";

export function fetchApi() {
  return AxiosWithAuth()
    .get("/api/colors")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log("Fetch err:", err));
}
