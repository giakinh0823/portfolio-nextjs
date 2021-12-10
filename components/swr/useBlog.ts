import { blogApi } from "../../api-client/blogApi";
import useSWR, { useSWRConfig } from "swr";

export function useBlogs(page = 1) {
  const { data, error } = useSWR(`blogs`, () => blogApi.getAll({page}));
  
  return {
    blogs: data,
    isLoading: !error && !data,
    isError: error,
  };
}


export function useBlog(slug: string) {
  const { data, error } = useSWR(`blog`, () => blogApi.getBySlug(slug));
  
  return {
    blog: data,
    isLoading: !error && !data,
    isError: error,
  };
}


