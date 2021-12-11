import useSWR from "swr";
import { categoryApi } from '../../api-client/categoryApi';

export function useCategorys() {
  const { data, error } = useSWR(`categorys`, () => categoryApi.getAll());
  
  return {
    categorys: data,
    isLoading: !error && !data,
    isError: error,
  };
}
