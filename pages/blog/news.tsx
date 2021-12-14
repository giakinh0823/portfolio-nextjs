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

  const [data, setData] = React.useState(blogs);

  React.useEffect(() => {
    setData(blogs);
  }, [blogs]);

  const onChange = React.useCallback((id: number) => {
    if (id !== -1) {
      (async () => {
        const topics = await getAllTopicWithParams({
          filter: { column: "id", operator: "$eq", value: id },
        });
        if(topics){
          setData(topics[0]?.blogs);
        }
      })();
    }else{
      setData(blogs);
    }
  }, [blogs]);

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
        shareImage="https://res.cloudinary.com/giakinh0823/image/upload/v1639473921/thumbnail_cat_882d37503d.webp?updated_at=2021-12-14T09:25:21.760Z"
      />
      <ListNew
        blogs={data}
        isLoadingBlogs={isLoading}
        topics={topics?.topics}
        isLoadingTopics={topics?.isLoading}
        onChange={onChange}
      />
    </>
  );
};

News.Layout = MainLayout;

export default News;
