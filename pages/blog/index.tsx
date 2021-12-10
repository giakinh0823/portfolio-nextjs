import * as React from "react";
import { MainLayout } from "../../components/layout/main";
import MyBlog from "../../components/blog/MyBlog";

export interface BlogProps {}

const Blog = (props: BlogProps) => {
  return (
    <>
      <MyBlog />
    </>
  );
};

Blog.Layout = MainLayout;

export default Blog;
