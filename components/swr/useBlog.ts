import { blogApi } from "../../api-client/blogApi";
import useSWR, { useSWRConfig } from "swr";
import {Param} from '../../models';

export function useBlogs(param: Param) {
  const { data, error } = useSWR(`blogs?limit${param.limit ? param.limit : 6}`, () => blogApi.getAll(param));
  
  return {
    blogs: data,
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


