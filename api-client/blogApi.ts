import { Blog, ListResponse, Params } from "../models";
import axiosClient from "./axios-client";

export const blogApi = {
  getAll(params: Params) : Promise<ListResponse<Blog>> {
    return axiosClient.get("/blogs", { params });
  },
  getBySlug(slug: string) {
    return axiosClient.get(`/blogs/${slug}`);
  },
  createBlog(data: any) {
    return axiosClient.post("/blogs", data);
  },
};

//   createBlog(data: any) {
//     var form = new FormData();
//     for (const key in data) {
//       form.append(key, data[key]);
//     }
//     return axios({
//       method: "POST",
//       url: "/api/blogs",
//       data: form,
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//   },
