import axios from "axios";

const BASE_API_URL = "url da api";

export const api = axios.create({ baseURL: BASE_API_URL });
