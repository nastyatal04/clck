import { BASE_URL } from "./config";

export const fetchGetURL = () => {
  return fetch(BASE_URL).then((response) => response.json());
};
