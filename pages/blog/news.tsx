import * as React from "react";
import ListNew from "../../components/blog/ListNews";
import Seo from "../../components/common/seo/Seo";
import { MainLayout } from "../../components/layout/main";
import { useBlogs } from "../../components/swr/useBlog";

export interface BlogProps {}

const News = (prop: BlogProps) => {

  const { blogs } = useBlogs();

  return (
    <>
      <Seo
        title={`Hà Gia Kính - blog`}
        metaTitle={`Hà Gia Kính - blog`}
        blog={blogs ? blogs.map((item: any) => item.conntent).join(" "): "Hà Gia Kính - blog"}
      />
      <ListNew blogs={blogs} />
    </>
  );
};

News.Layout = MainLayout;

export default News;

