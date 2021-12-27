import { Params } from "../models";
import { Topic } from "../models/topic";
import axiosClient from "./axios-client";

export const topicApi = {
  getAll(params: Params): Promise<Topic[]> {
    return axiosClient.get("/topics");
  },
};
