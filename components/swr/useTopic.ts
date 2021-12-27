import useSWR from "swr";
import { topicApi } from "../../api-client/topicApi";

export function useTopics(params: any) {
  const { data, error } = useSWR(
    `topics${Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&")}`,
    () => topicApi.getAll(params)
  );

  return {
    topics: data,
    isLoading: !error && !data,
    isError: error,
  };
}
