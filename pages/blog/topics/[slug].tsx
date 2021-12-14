import { useRouter } from "next/router";
import * as React from "react";
import {
  getAllPostWidthParams,
  getAllTopic,
} from "../../../api-client/strapiApi";
import BlogTopic from "../../../components/blog/BlogTopic";
import { MainLayout } from "../../../components/layout/main";
import { useBlogsWithParam } from "../../../components/swr/useBlog";
import { useTopicWithParam } from "../../../components/swr/useTopic";

export interface TopicSlugProps {
  blogs: any;
  slug: any;
}

const TopicSlug = ({ blogs, slug }: TopicSlugProps) => {
  const [data, setData] = React.useState(blogs);
  const [loading, setLoading] = React.useState<boolean>(false);

  const loadMore = React.useCallback(() => {
    (async () => {
      if (
        !data?.meta?.pagination?.page ||
        data?.meta?.pagination?.page >= data?.meta?.pagination?.pageCount
      ) {
        return;
      }
      try {
        setLoading(true);
        const blogs = await getAllPostWidthParams({
          sort: { value: "id", type: "desc" },
          filters: {
            column: ["topics", "name"],
            operator: "$eq",
            value: slug,
          },
          pagination: { page: data?.meta?.pagination?.page + 1, pageSize: 3 },
        });
        setData({ data: [...data?.data, ...blogs.data], meta: blogs?.meta });
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    })();
  }, [data, slug]);

  return (
    <>
      {blogs && blogs.data.length > 0 && (
        <BlogTopic blogs={data?.data} loadMore={loadMore} loading={loading} />
      )}
    </>
  );
};

TopicSlug.Layout = MainLayout;

export default TopicSlug;

export async function getStaticProps(context: any) {
  try {
    const blogs = await getAllPostWidthParams({
      sort: { value: "id", type: "desc" },
      filters: {
        column: ["topics", "name"],
        operator: "$eq",
        value: context?.params?.slug,
      },
      pagination: { page: 0, pageSize: 3 },
    });
    if (!blogs) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        blogs,
        slug: context?.params?.slug,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
    };
  } catch (e: any) {
    console.log(e);
    return { notFound: true };
  }
}

export async function getStaticPaths() {
  const topics = await getAllTopic();

  // Get the paths we want to pre-render based on posts
  const paths = topics?.data?.map((topic: any) => ({
    params: { slug: topic.name },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}
