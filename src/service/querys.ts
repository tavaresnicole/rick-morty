import api from "./api";

const getCharacters = async (id?: string, page?: number) => {
  const { data } = id
    ? await api.get(`/character/${id}`)
    : await api.get("/character", { params: { page } });
  return data;
};

const getEpisodes = async () => {
  const { data } = await api.get("/episode");
  return data;
};

const getLocations = async () => {
  const { data } = await api.get("/location");
  return data;
};

export { getCharacters, getEpisodes, getLocations };
