import * as React from "react";
import {
  getAllPostWidthParams,
  getAllTopicWithParams,
} from "../../api-client/strapiApi";
import ListNew from "../../components/blog/ListNews";
import Seo from "../../components/common/seo/Seo";
import { MainLayout } from "../../components/layout/main";
import { useBlogs } from "../../components/swr/useBlog";
import { useTopics } from "../../components/swr/useTopic";

export interface BlogProps {}

const News = (prop: BlogProps) => {
  const { blogs, isLoading } = useBlogs();
  const topics = useTopics();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState(blogs);

  React.useEffect(() => {
    setData(blogs);
  }, [blogs]);

  const onChange = React.useCallback(
    (id: number) => {
      if (id !== -1) {
        (async () => {
          try {
            setLoading(true);
            const blogs = await getAllPostWidthParams({
              sort: { value: "id", type: "desc" },
              filters: { column: ["topics", "id"], operator: "$eq", value: id },
            });
            if (blogs) {
              setData(blogs);
            }
            setLoading(false);
          } catch (error) {
            console.log(error);
            setLoading(false);
          }
        })();
      } else {
        setData(blogs);
      }
    },
    [blogs]
  );

  const onSearch = React.useCallback((input: string) => {
    if (input) {
      (async () => {
        try {
          setLoading(true);
          const blogs = await getAllPostWidthParams({
            sort: { value: "id", type: "desc" },
            filter: { column: "title", operator: "$containsi", value: input },
          });
          if (blogs) {
            setData(blogs);
          }
          setLoading(false);
        } catch (e) {
          console.log(e);
          setLoading(false);
        }
      })();
    }
  }, []);

  const loadMore = React.useCallback(() => {
    (async () => {
      if (
        isLoading || !data?.meta?.pagination?.page ||
        data?.meta?.pagination?.page >= data?.meta?.pagination?.pageCount
      ) {
        return;
      }
      try {
        setLoading(true);
        const blogs = await getAllPostWidthParams({
          sort: { value: "id", type: "desc" },
          pagination: { page: data?.meta?.pagination?.page + 1, pageSize: 3 },
        });
        setData({ data: [...data?.data, ...blogs.data], meta: blogs?.meta });
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    })();
  }, [data, isLoading]);

  return (
    <>
      <Seo
        title={`Hà Gia Kính - blog`}
        metaTitle={`Hà Gia Kính - blog`}
        blog={
          blogs
            ? blogs?.data.map((item: any) => item.conntent).join(" ")
            : "Hà Gia Kính - blog"
        }
        shareImage="https://res.cloudinary.com/giakinh0823/image/upload/v1639473921/thumbnail_cat_882d37503d.webp?updated_at=2021-12-14T09:25:21.760Z"
      />
      <ListNew
        blogs={data?.data}
        isLoadingBlogs={isLoading}
        topics={topics?.topics?.data}
        isLoadingTopics={topics?.isLoading}
        onChange={onChange}
        onSearch={onSearch}
        loadMore={loadMore}
        loading={loading}
      />
    </>
  );
};

News.Layout = MainLayout;

export default News;
