import * as React from "react";
import { getPost } from "../../api-client/firebaseApi";
import ListNew from "../../components/blog/ListNews";
import MyBlog from "../../components/blog/MyBlog";
import { MainLayout } from "../../components/layout/main";

export interface BlogProps {}

const Blog = (prop: BlogProps) => {
  const [bestBlog, setBestBlog] = React.useState<any>([]);
  const [listBlog, setListBlog] = React.useState<any>([]);

  React.useEffect(() => {
    (async () => {
      const listBlog = await getPost({ limit: 1000 });
      const bestBlog = await getPost({ limit: 3 });
      setBestBlog(bestBlog);
      setListBlog(listBlog);
    })();
  }, []);

  return (
    <>
      <MyBlog blogs={bestBlog} />
      <ListNew blogs={listBlog} />
    </>
  );
};

Blog.Layout = MainLayout;

export default Blog;
