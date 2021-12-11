import { useRouter } from "next/router";
import * as React from "react";
import { useBlog } from "../../components/swr/useBlog";
import dynamic from "next/dynamic";
import { MainLayout } from "../../components/layout";
import { getPostBySlug } from "../../api-client/firebaseApi";

const BlogContentNoSSR = dynamic(
  () => import("../../components/blog/BlogContent"),
  { ssr: false }
);

export interface IBlogDetailProps {}

export default function BlogDetail(props: IBlogDetailProps) {
  const router = useRouter();
  const slug = router.query.slug as string;
  // const blog = useBlog(slug);

  const [blog, setBlog] = React.useState<any>();

  React.useEffect(() => {
    (async () => {
      try {
        const blog = await getPostBySlug(slug);
        setBlog(blog);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [slug]);

  return (
    <>
      <BlogContentNoSSR data={blog} />
    </>
  );
}

BlogDetail.Layout = MainLayout;
