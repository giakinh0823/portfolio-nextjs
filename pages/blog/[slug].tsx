import { useRouter } from "next/router";
import * as React from "react";
import { useBlog } from "../../components/swr/useBlog";
import dynamic from "next/dynamic";
import { MainLayout } from "../../components/layout";
import { getPost, getPostBySlug } from "../../api-client/firebaseApi";

const BlogContentNoSSR = dynamic(
  () => import("../../components/blog/BlogContent"),
  { ssr: false }
);

export interface IBlogDetailProps {
  blog: any;
}

export default function BlogDetail({blog}: IBlogDetailProps) {
  // const router = useRouter();
  // const slug = router.query.slug as string;
  // // const blog = useBlog(slug);

  // const [blog, setBlog] = React.useState<any>();

  // React.useEffect(() => {
  //   (async () => {
  //     try {
  //       const blog = await getPostBySlug(slug);
  //       setBlog(blog);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })();
  // }, [slug]);

  return (
    <>
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
  const blogs = await getPost({ limit: 1000 });

  // Get the paths we want to pre-render based on posts
  const paths = blogs.map((post: any) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}
