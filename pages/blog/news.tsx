import * as React from "react";
import { blogApi } from "../../api-client/blogApi";
import ListNew from "../../components/blog/ListNews";
import Seo from "../../components/common/seo/Seo";
import { MainLayout } from "../../components/layout/main";
import { useBlogs } from "../../components/swr/useBlog";
import { useTopics } from "../../components/swr/useTopic";
import { Blog, ListResponse } from "../../models";

export interface BlogProps {}

const News = (prop: BlogProps) => {
  const { blogs, isLoading } = useBlogs({});
  const topics = useTopics({});
  const [loading, setLoading] = React.useState<boolean>(false);
  const [loadingTopics, setLoadingTopics] = React.useState<boolean>(false);
  const [data, setData] = React.useState<ListResponse<Blog>>();

  const onChange = React.useCallback((id: number) => {
    if (id !== -1) {
      (async () => {
        try {
          setLoading(true);
          setLoadingTopics(true);
          const response = await blogApi.getAll({
            topics: id,
            page_size: 3,
          });
          if (response) {
            setData(response);
          }
          setLoading(false);
          setLoadingTopics(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      })();
    } else {
      (async () => {
        try {
          setLoading(true);
          setLoadingTopics(true);
          const response = await blogApi.getAll({});
          if (response) {
            setData(response);
          }
          setLoading(false);
          setLoadingTopics(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      })();
    }
  }, []);

  const onSearch = React.useCallback((input: string) => {
    if (input) {
      setData({} as any);
      (async () => {
        try {
          setLoading(true);
          const response = await blogApi.getAll({
            search: input,
            page_size: 6,
          });
          if (response) {
            setData(response);
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
      if (isLoading || !data?.next) {
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
        const response = await blogApi.getAll(params);
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
  }, [data, isLoading]);

  return (
    <>
      <Seo
        title={`Hà Gia Kính - blog`}
        metaTitle={`Hà Gia Kính - blog`}
        blog={
          blogs
            ? blogs?.map((item: any) => item.conntent).join(" ")
            : "Hà Gia Kính - blog"
        }
        shareImage="https://res.cloudinary.com/giakinh0823/image/upload/v1639473921/thumbnail_cat_882d37503d.webp?updated_at=2021-12-14T09:25:21.760Z"
      />
      <ListNew
        blogs={data?.results}
        isLoadingBlogs={isLoading}
        topics={topics?.topics}
        isLoadingTopics={topics?.isLoading}
        onChange={onChange}
        onSearch={onSearch}
        loadMore={loadMore}
        loading={loading}
        loadingTopics={loadingTopics}
      />
    </>
  );
};

News.Layout = MainLayout;

export default News;
