import * as React from "react";
import { MainLayout } from "../../components/layout/main";
import MyBlog from "../../components/blog/MyBlog";
import ListNew from "../../components/blog/ListNews";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { getPost } from "../../api-client/firebaseApi";

export interface BlogProps {
  listNew: any;
  bestBlog: any;
}

const Blog = ({listNew, bestBlog}: BlogProps) => {
  return (
    <>
      <MyBlog blogs={bestBlog}/>
      <ListNew blogs={listNew}/>
    </>
  );
};

Blog.Layout = MainLayout;

export default Blog;

export const getStaticProps: GetStaticProps<any> = async (
  context: GetStaticPropsContext
) => {
  const listNew = await getPost({ limit: 1000 });
  const bestBlog = await getPost({ limit: 3 });

  return {
    props: {
      listNew: listNew.map((x: any) => ({ ...x })),
      bestBlog: bestBlog.map((x: any) => ({ ...x })),
    },
    revalidate: 60,
  };
};
