import * as React from "react";
import AllBlog from "../../components/blog/AllBlog";
import MyBlog from "../../components/blog/MyBlog";
import SkeletonAllBlog from "../../components/blog/SkeletonAllBlog";
import Seo from "../../components/common/seo/Seo";
import { MainLayout } from "../../components/layout/main";
import { useBlogsWithParam } from "../../components/swr/useBlog";
import { useTopicWithParam } from "../../components/swr/useTopic";

export interface BlogProps {}

const Blog = (prop: BlogProps) => {
  const { blogs, isLoading, isError } = useBlogsWithParam({
    sort: { value: "id", type: "desc" },
    limit: { start: 1, limit: 6 },
  });

  const backens = useTopicWithParam(
    {
      filter: {
        column: "name",
        value: "Backend",
        operator: "$eq",
      },
    },
    6
  );

  const frontends = useTopicWithParam(
    {
      filter: {
        column: "name",
        value: "Front-end",
        operator: "$eq",
      },
    },
    6
  );
  const uxuis = useTopicWithParam(
    {
      filter: {
        column: "name",
        value: "UX-UI",
        operator: "$eq",
      },
    },
    6
  );
  const tools = useTopicWithParam(
    {
      filter: {
        column: "name",
        value: "Tools",
        operator: "$eq",
      },
    },
    6
  );

  return (
    <>
      <Seo
        title={`Hà Gia Kính - blog`}
        metaTitle={`Hà Gia Kính - blog`}
        blog={
          blogs
            ? blogs?.data?.map((item: any) => item.conntent).join(" ")
            : "Hà Gia Kính - blog"
        }
        shareImage="https://res.cloudinary.com/giakinh0823/image/upload/v1639473921/thumbnail_cat_882d37503d.webp?updated_at=2021-12-14T09:25:21.760Z"
      />
      <MyBlog blogs={blogs?.data} isLoading={isLoading} />
      {!isLoading ? (
        <AllBlog blogs={blogs?.data} link="/blog/news" title="Tất cả" />
      ) : (
        <SkeletonAllBlog />
      )}
      {frontends?.topics ? (
        <AllBlog
          blogs={frontends?.topics ? frontends?.topics?.data[0]?.blogs : []}
          link={
            frontends?.topics
              ? `/blog/topics/${frontends?.topics?.data[0]?.name}`
              : ""
          }
          title="Front-end"
        />
      ) : (
        <SkeletonAllBlog />
      )}
      {uxuis?.topics ? (
        <AllBlog
          blogs={backens?.topics ? backens?.topics?.data[0]?.blogs : []}
          link={
            backens?.topics
              ? `/blog/topics/${backens?.topics?.data[0]?.name}`
              : ""
          }
          title="Backend"
        />
      ) : (
        <SkeletonAllBlog />
      )}
      {uxuis?.topics && (
        <AllBlog
          blogs={uxuis?.topics ? uxuis?.topics?.data[0]?.blogs : []}
          link={
            uxuis?.topics ? `/blog/topics/${uxuis?.topics?.data[0]?.name}` : ""
          }
          title="UX/UI"
        />
      )}
      {tools?.topics ? (
        <AllBlog
          blogs={tools?.topics ? tools?.topics?.data[0]?.blogs : []}
          link={
            tools?.topics ? `/blog/topics/${tools?.topics?.data[0]?.name}` : ""
          }
          title="Tools"
        />
      ) : (
        <SkeletonAllBlog />
      )}
      <div style={{ padding: "50px" }}></div>
    </>
  );
};

Blog.Layout = MainLayout;

export default Blog;
