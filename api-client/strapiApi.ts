import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import slugify from "slugify";

const baseURL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL ?? "http://localhost:1337";

export const getAllPost = async () => {
  const response = await axios.get(
    `${baseURL}/api/blogs?populate=*&sort=id:desc`
  );

  const data = response.data.data.map((item: any) => {
    const id = item.id;
    const data = item.attributes;
    return {
      ...data,
      id: id,
      image: data?.image?.data?.attributes?.url,
      author: data?.author?.data?.attributes?.fullname,
      topics: data?.topics?.data?.map((topic: any) => {
        return {
          ...topic.attributes,
          id: topic.id,
        };
      }),
    };
  });

  return data;
};

export const getAllPostWidthParams = async (params: any) => {
  const { limit, sort, pagination, filter } = params;
  const response = await axios.get(
    `${baseURL}/api/blogs?populate=*${
      sort ? `&sort=${sort.value}:${sort.type}` : ""
    }${
      pagination
        ? `&pagination[page]=${pagination.page}&pagination[pageSize]=${pagination.pageSize}`
        : ""
    }${
      limit
        ? `&pagination[start]=${limit.start}&pagination[limit]=${limit.limit}`
        : ""
    }${
      filter
        ? `&filters[${filter.column}][${filter.operator}]=${filter.value}`
        : ""
    }`
  );

  const data = response.data.data.map((item: any) => {
    const id = item.id;
    const data = item.attributes;
    return {
      ...data,
      id: id,
      image: data?.image?.data?.attributes?.url,
      author: data?.author?.data?.attributes?.fullname,
      topics: data?.topics?.data?.map((topic: any) => {
        return {
          ...topic.attributes,
          id: topic.id,
        };
      }),
    };
  });

  return data;
};

export const getPostBySlug = async (slug: any) => {
  let response = (await axios.get(
    `${baseURL}/api/blogs/?populate=*&filters[slug][$eq]=${slug}`
  )) as any;
  response = response.data.data[0];
  const data = {
    ...response?.attributes,
    image: response?.attributes?.image?.data?.attributes?.url,
    author: response?.attributes?.author?.data?.attributes?.fullname
      ? response?.attributes?.author?.data?.attributes?.fullname
      : "",
    topics: response?.attributes?.topics?.data?.map((topic: any) => {
      return {
        ...topic.attributes,
        id: topic.id,
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
    `${baseURL}/api/topics?populate=*,blogs.image,blogs.author`
  );
  const data = response.data.data.map((item: any) => {
    return {
      ...item.attributes,
      id: item.id,
    };
  });
  return data;
};

export const getAllTopicWithParams = async (params: any) => {
  const { limit, sort, pagination, filter } = params;
  const response = await axios.get(
    `${baseURL}/api/topics?populate=*,blogs.image,blogs.author${
      sort ? `&sort=${sort.value}:${sort.type}` : ""
    }${
      pagination
        ? `&pagination[page]=${pagination.page}&pagination[pageSize]=${pagination.pageSize}`
        : ""
    }${
      limit
        ? `&pagination[start]${limit.start}&pagination[limit]=${limit.limit}`
        : ""
    }${
      filter
        ? `&filters[${filter.column}][${filter.operator}]=${filter.value}`
        : ""
    }`
  );
  const data = response?.data?.data?.map((item: any) => {
    return {
      ...item.attributes,
      id: item.id,
    };
  });

  const newData = data?.map((topic: any) => {
    const listBlog = topic.blogs;
    const blogs = listBlog.data?.slice(0, 6)?.map((item: any) => {
      const id = item.id;
      const data = item.attributes;
      return {
        ...data,
        id: id,
        image: data?.image?.data?.attributes?.url,
        author: data?.author?.data?.attributes?.fullname,
        topics: data?.topics?.data?.map((topic: any) => {
          return {
            ...topic.attributes,
          };
        }),
      };
    });
    return {
      ...topic,
      blogs: blogs,
    };
  });

  return newData;
};
