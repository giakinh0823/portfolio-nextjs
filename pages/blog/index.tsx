import * as React from "react";
import { MainLayout } from "../../components/layout/main";
import MyBlog from "../../components/blog/MyBlog";
import ListNew from "../../components/blog/ListNews";

export interface BlogProps {}

const Blog = (props: BlogProps) => {
  return (
    <>
      <MyBlog/>
      <ListNew/>
    </>
  );
};

Blog.Layout = MainLayout;

export default Blog;


