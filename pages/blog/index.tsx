import * as React from "react";
import ListNew from "../../components/blog/ListNews";
import MyBlog from "../../components/blog/MyBlog";
import Seo from "../../components/common/seo/Seo";
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

  const { blogs } = useBlogs();

  return (
    <>
      <Seo
        title={`Hà Gia Kính - blog`}
        metaTitle={`Hà Gia Kính - blog`}
        blog={blogs.map((item: any) => item.conntent).join(" ")}
      />
      <MyBlog blogs={blogs} />
      <ListNew blogs={blogs} />
    </>
  );
};

Blog.Layout = MainLayout;

export default Blog;
