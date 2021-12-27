import * as React from "react";
import { blogApi } from "../../../api-client/blogApi";
import { topicApi } from "../../../api-client/topicApi";
import BlogTopic from "../../../components/blog/BlogTopic";
import { MainLayout } from "../../../components/layout/main";
import { Blog, ListResponse } from "../../../models";
import { Topic } from "../../../models/topic";

export interface TopicSlugProps {
  blogs: any;
  slug: any;
}

const TopicSlug = ({ blogs, slug }: TopicSlugProps) => {
  const [data, setData] = React.useState<ListResponse<Blog>>(blogs);
  const [loading, setLoading] = React.useState<boolean>(false);

  const loadMore = React.useCallback(() => {
    (async () => {
      if (loading || !data?.next) {
        return;
      }
      try {
        setLoading(true);
        const search = new URL(data.next).search.substring(1);
        const params =
          data && data.next != null
            ? JSON.parse(
                '{"' +
                  decodeURI(search)
                    .replace(/"/g, '\\"')
                    .replace(/&/g, '","')
                    .replace(/=/g, '":"') +
                  '"}'
              )
            : {};
        const response = await blogApi.getAll({
          ...params,
          topics__slug: slug,
        });
        const oldData = data?.results ? data.results : [];
        setData({
          results: [...oldData, ...response.results],
          count: response.count,
          next: response.next,
          previous: response.previous,
        });
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    })();
  }, [data, slug, loading]);

  return (
    <>
      {data && data.results.length > 0 && (
        <BlogTopic blogs={data?.results} loadMore={loadMore} loading={loading} />
      )}
    </>
  );
};

TopicSlug.Layout = MainLayout;

export default TopicSlug;

export async function getStaticProps(context: any) {
  try {
    const blogs = await blogApi.getAll({
      topics__slug: context.params.slug,
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
  const topics = await topicApi.getAll({});

  // Get the paths we want to pre-render based on posts
  const paths = topics.map((topic: Topic) => ({
    params: { slug: topic.name },
  }));

  return { paths, fallback: "blocking" };
}
