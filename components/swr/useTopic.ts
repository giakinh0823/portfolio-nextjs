import useSWR from "swr";
import { getAllTopic, getAllTopicWithParams } from "../../api-client/strapiApi";

export function useTopics() {
  const { data, error } = useSWR(`topics`, () => getAllTopic());

  return {
    topics: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useTopicWithParam(params: any, limitBlog?: number) {
  const { data, error } = useSWR(`topics/${params.filter.value}`, () =>
    getAllTopicWithParams(params)
  );

  return {
    topics: data,
    isLoading: !error && !data,
    isError: error,
  };
}
