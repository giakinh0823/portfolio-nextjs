import useSWR from "swr";
import { blogApi } from "../../api-client/blogApi";
import { Blog, ListResponse } from "../../models";

export function useBlogs(params: any) {
  const { data, error } = useSWR<ListResponse<Blog>, Error>(
    `blogs/${Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&")}`,
    () => blogApi.getAll(params)
  );

  return {
    blogs: data?.results || [],
    isLoading: !error && !data,
    isError: error,
  };
}

export function useBlog(slug: string) {
  const { data, error } = useSWR(`blog/${slug}`, () => blogApi.getBySlug(slug));

  return {
    blog: data,
    isLoading: !error && !data,
    isError: error,
  };
}
