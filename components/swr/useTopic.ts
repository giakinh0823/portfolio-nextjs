import { topicApi } from './../../api-client/topicApi';
import useSWR from "swr";

export function useTopics() {
  const { data, error } = useSWR(`topics`, () => topicApi.getAll());
  
  return {
    topics: data,
    isLoading: !error && !data,
    isError: error,
  };
}
