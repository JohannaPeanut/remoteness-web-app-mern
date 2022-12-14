import api from "./api";

export const createNewLandscape = () =>
  api.get("/landscape").then((response) => response.data);

export const fetchRandomLandscapes = () =>
  api.get("/random-landscapes").then((response) => response.data);
