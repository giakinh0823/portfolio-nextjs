import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import * as React from "react";
import { getAllPost, getPostBySlug } from "../../api-client/strapiApi";
import Seo from "../../components/common/seo/Seo";
import { MainLayout } from "../../components/layout";

const BlogContentNoSSR = dynamic(
  () => import("../../components/blog/BlogContent"),
  { ssr: false }
);

export interface IBlogDetailProps {
  blog: any;
}

export default function BlogDetail({blog}: IBlogDetailProps) {
  return (
    <>
      <Seo
        title={`Hà Gia Kính - ${blog.title}`}
        metaTitle={`Hà Gia Kính - ${blog.title}`}
        metaDescription={blog.description}
        blog={blog.content}
        shareImage="https://res.cloudinary.com/giakinh0823/image/upload/v1639473921/thumbnail_cat_882d37503d.webp?updated_at=2021-12-14T09:25:21.760Z"
      />
      <BlogContentNoSSR data={blog} />
    </>
  );
}

BlogDetail.Layout = MainLayout;

export async function getStaticProps(context: any) {
  const blog = await getPostBySlug(context?.params?.slug);
  if (!blog) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      blog,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

export async function getStaticPaths() {
  const blogs = await getAllPost();

  // Get the paths we want to pre-render based on posts
  const paths = blogs.map((post: any) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
}
