import baseURL from "../tests-config";
import axios from "axios";

type Endpoint = string;
interface FetchOptions {
  endpoint: Endpoint;
  queryParam?: string;
}

export const fetch = async ({
  endpoint,
  queryParam,
}: FetchOptions): Promise<Axios.AxiosXHR<unknown>> => {
  const url = queryParam
    ? `${baseURL}${endpoint}?${queryParam}`
    : `${baseURL}${endpoint}`;

  return axios.get(url);
};
