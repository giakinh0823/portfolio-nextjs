import * as React from "react";
import ListNew from "../../components/blog/ListNews";
import MyBlog from "../../components/blog/MyBlog";
import { MainLayout } from "../../components/layout/main";
import { useBlogs } from "../../components/swr/useBlog";

export interface BlogProps {}

const Blog = (prop: BlogProps) => {
  // const [bestBlog, setBestBlog] = React.useState<any>([]);
  // const [listBlog, setListBlog] = React.useState<any>([]);

  // React.useEffect(() => {
  //   (async () => {
  //     const data = await getAllPost();
  //     setBestBlog(data);
  //     setListBlog(data);
  //   })();
  // }, []);

  const {blogs} = useBlogs();

  return (
    <>
      <MyBlog blogs={blogs} />
      <ListNew blogs={blogs} />
    </>
  );
};

Blog.Layout = MainLayout;

export default Blog;
