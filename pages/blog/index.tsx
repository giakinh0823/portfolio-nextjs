import * as React from "react";
import avatar from "../../assets/image/avatar.png";
import AllBlog from "../../components/blog/AllBlog";
import MyBlog from "../../components/blog/MyBlog";
import SkeletonAllBlog from "../../components/blog/SkeletonAllBlog";
import Seo from "../../components/common/seo/Seo";
import { MainLayout } from "../../components/layout/main";
import { useBlogs } from "../../components/swr/useBlog";
import { Blog } from "../../models";

export interface BlogProps {}

const BlogPage = (prop: BlogProps) => {
  const { blogs, isLoading, isError } = useBlogs({ page_size: 6 });
  const frontends = useBlogs({ topics__name: "Front-end", page_size: 6 });
  const uxuis = useBlogs({ topics__name: "UX-UI", page_size: 6 });
  const backends = useBlogs({ topics__name: "Backend", page_size: 6 });
  const tools = useBlogs({ topics__name: "Tools", page_size: 6 });
  return (
    <>
      <Seo
        title={`Hà Gia Kính - blog`}
        metaTitle={`Hà Gia Kính - blog`}
        blog={
          blogs
            ? blogs?.map((item: Blog) => item.content).join(" ")
            : "Hà Gia Kính - blog"
        }
        shareImage={avatar.src}
      />
      <MyBlog blogs={blogs} isLoading={isLoading} />
      {!isLoading ? (
        <AllBlog blogs={blogs} link="/blog/news" title="Tất cả" />
      ) : (
        <SkeletonAllBlog />
      )}
      {(frontends.blogs && frontends.blogs.length && !frontends.isLoading) >
      0 ? (
        <AllBlog
          blogs={frontends.blogs ? frontends.blogs : []}
          link={"/blog/topics/front-end"}
          title="Front-end"
        />
      ) : (
        <SkeletonAllBlog />
      )}
      {(backends.blogs && backends.blogs.length && !backends.isLoading) > 0 ? (
        <AllBlog
          blogs={backends.blogs ? backends.blogs : []}
          link={`/blog/topics/backend`}
          title="Backend"
        />
      ) : (
        <SkeletonAllBlog />
      )}
      {(uxuis.blogs && uxuis.blogs.length && !uxuis.isLoading) > 0 && (
        <AllBlog
          blogs={uxuis.blogs ? uxuis.blogs : []}
          link={`/blog/topics/ux-ui`}
          title="UX/UI"
        />
      )}
      {tools.blogs && tools.blogs.length > 0 && !tools.isLoading ? (
        <AllBlog
          blogs={tools.blogs ? tools.blogs : []}
          link={`/blog/topics/tools`}
          title="Tools"
        />
      ) : (
        <SkeletonAllBlog />
      )}
      <div style={{ padding: "50px" }}></div>
    </>
  );
};

BlogPage.Layout = MainLayout;

export default BlogPage;
