import axiosClient from "./axios-client";

const chatbotApi = {
  join(data:any): Promise<any> {
    const url = "/chatbots/join/";
    return axiosClient.post(url,data);
  },
  getById(id: any, data?: any): Promise<any> {
    const url = `/chatbots/${id}/`;
    return axiosClient.post(url,data);
  },
};

export default chatbotApi;
