import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import slugify from "slugify";

const baseURL = process.env.NEXT_PUBLIC_STRAPI_API_URL ?? 'http://localhost:1337'

export const getAllPost = async () => {
  const response = await axios.get(
    `${baseURL}/api/blogs?populate=image,author,topics`
  );

  const data = response.data.data.map((item: any) => {
    const id= item.id;
    const data = item.attributes;
    return {
      ...data,
      id: id,
      image: baseURL + data?.image?.data?.attributes?.url,
      author: data?.author?.data?.attributes?.fullname,
      topics: data?.topics?.data?.map((topic: any) => {
        return {
          ...topic.attributes,
        };
      }),
    };
  });

  return data;
};

export const getPostBySlug = async (slug: any) => {
  let response = (await axios.get(
    `${baseURL}/api/blogs/?populate=image,author,topics&filters[slug][$eq]=${slug}`
  )) as any;
  response = response.data.data[0];
  const data = {
    ...response?.attributes,
    image: baseURL + response?.attributes.image.data.attributes.url,
    author: response?.attributes?.author?.data?.attributes?.fullname ? response?.attributes?.author?.data?.attributes?.fullname : '',
    topics: response?.attributes.topics.data.map((topic: any) => {
      return {
        ...topic.attributes,
      };
    }),
  };
  return data;
};



export const createPostBySlug = async (data: any) => {
    console.log(data);
};






export const getAllTopic = async () => {
  const response = await axios.get(
    `${baseURL}/api/topics`
  );
  const data = response.data.data.map((item: any) => {
    return {
      ...item.attributes,
      id: item.id,
    };
  });
  console.log(data);
  return data;
};