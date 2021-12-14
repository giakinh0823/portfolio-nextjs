import useSWR from "swr";
import {
  getAllPost,
  getAllPostWidthParams,
  getPostBySlug,
} from "../../api-client/strapiApi";

export function useBlogs() {
  const { data, error } = useSWR(`blogs`, () =>
    getAllPostWidthParams({
      sort: { value: "id", type: "desc" },
      pagination: { page: 0, pageSize: 3 },
    })
  );

  return {
    blogs: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useBlogsWithParam(params: any) {
  const { data, error } = useSWR(`blogs${params}`, () =>
    getAllPostWidthParams(params)
  );

  return {
    blogs: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useBlog(slug: string) {
  const { data, error } = useSWR(`blog/${slug}`, () => getPostBySlug(slug));

  return {
    blog: data,
    isLoading: !error && !data,
    isError: error,
  };
}
