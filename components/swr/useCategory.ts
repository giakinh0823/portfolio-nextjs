import useSWR from "swr";
import { categoryApi } from '../../api-client/categoryApi';
import { getCategorys } from "../../api-client/firebaseApi";

export function useCategorys() {
  // const { data, error } = useSWR(`categorys`, () => categoryApi.getAll());
  const { data, error } = useSWR(`categorys`, () => getCategorys());
  
  return {
    categorys: data,
    isLoading: !error && !data,
    isError: error,
  };
}
