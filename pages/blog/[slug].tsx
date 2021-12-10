import { useRouter } from "next/router";
import * as React from "react";
import { useBlog } from "../../components/swr/useBlog";
import BlogContent from "../../components/blog/BlogContent";

export interface IBlogDetailProps {}

export default function BlogDetail(props: IBlogDetailProps) {
  const router = useRouter();
  const slug = router.query.slug as string;
  const blog = useBlog(slug);

  return (
    <>
      <BlogContent blog={blog} />
    </>
  );
}
