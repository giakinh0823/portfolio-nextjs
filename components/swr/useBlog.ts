import useSWR from "swr";
import { getAllPost, getPostBySlug } from "../../api-client/strapiApi";

export function useBlogs(param?: any) {
  const { data, error } = useSWR(`blogs`, () => getAllPost());

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
