import { ApolloClient } from "@apollo/client";

import { cache } from "./cache";
import { BASE_URL } from "src/utils";

export const client = new ApolloClient({
  uri: BASE_URL,
  cache,
});
