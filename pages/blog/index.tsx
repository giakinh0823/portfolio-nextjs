import * as React from "react";
import AllBlog from "../../components/blog/AllBlog";
import MyBlog from "../../components/blog/MyBlog";
import Seo from "../../components/common/seo/Seo";
import { MainLayout } from "../../components/layout/main";
import { useBlogsWithParam } from "../../components/swr/useBlog";
import { useTopicWithParam } from "../../components/swr/useTopic";

export interface BlogProps {}

const Blog = (prop: BlogProps) => {
  const { blogs } = useBlogsWithParam({
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
            ? blogs.map((item: any) => item.conntent).join(" ")
            : "Hà Gia Kính - blog"
        }
      />
      <MyBlog blogs={blogs} />
      <AllBlog blogs={blogs} link="/blog/news" title="All Blogs" />
      <AllBlog
        blogs={frontends?.topics ? frontends?.topics[0]?.blogs : []}
        link={frontends?.topics ? `/blog/topics/${frontends?.topics[0]?.name}` : ""}
        title="Front-end"
      />
      <AllBlog
        blogs={ backens?.topics ? backens?.topics[0]?.blogs : []}
        link={ backens?.topics ? `/blog/topics/${backens?.topics[0]?.name}` : ""}
        title="Backend"
      />
      <AllBlog
        blogs={uxuis?.topics ? uxuis?.topics[0]?.blogs : []}
        link={uxuis?.topics ? `/blog/topics/${uxuis?.topics[0]?.name}` : ""}
        title="UX/UI"
      />
      <AllBlog
        blogs={tools?.topics ? tools?.topics[0]?.blogs : []}
        link={tools?.topics ? `/blog/topics/${tools?.topics[0]?.name}` : ""}
        title="Tools"
      />
    </>
  );
};

Blog.Layout = MainLayout;

export default Blog;
