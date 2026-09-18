import { createApiClient } from "../lib/createApiClient";
import type { HeadersType } from "../types/headers";

const DOMAIN = import.meta.env.VITE_TV_MAZE_DOMAIN;

const HEADERS: HeadersType = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const tvMazeClient = createApiClient({
  headers: HEADERS,
  domain: DOMAIN,
});
