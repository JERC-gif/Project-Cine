import { apiGet } from "./api";

export const getPeliculas = () => apiGet("/data/peliculas.json");
export const getPromos = () => apiGet("/data/promos.json");
export const getAlimentos = () => apiGet("/data/alimentos.json");
export const getOtros = () => apiGet("/data/otros.json");
