import { topicApi } from "./../../api-client/topicApi";
import useSWR from "swr";
import { getAllTopicWithParams } from "../../api-client/strapiApi";

export function useTopics() {
  const { data, error } = useSWR(`topics`, () => topicApi.getAll());

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

  const newData = data?.map((topic: any) => {
    const listBlog = topic.blogs;
    const blogs = listBlog.data?.slice(0, limitBlog)?.map((item: any) => {
      const id = item.id;
      const data = item.attributes;
      return {
        ...data,
        id: id,
        image:
          process.env.NEXT_PUBLIC_STRAPI_API_URL +
          data?.image?.data?.attributes?.url,
        author: data?.author?.data?.attributes?.fullname,
        topics: data?.topics?.data?.map((topic: any) => {
          return {
            ...topic.attributes,
          };
        }),
      };
    });
    return {
      ...topic,
      blogs: blogs,
    };
  });

  return {
    topics: newData,
    isLoading: !error && !data,
    isError: error,
  };
}
