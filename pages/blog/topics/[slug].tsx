import { useRouter } from "next/router";
import * as React from "react";
import BlogTopic from "../../../components/blog/BlogTopic";
import { MainLayout } from "../../../components/layout/main";
import { useTopicWithParam } from "../../../components/swr/useTopic";

export interface TopicSlugProps {}

const TopicSlug = (props: TopicSlugProps) => {
  const router = useRouter();
  const { topics } = useTopicWithParam(
    {
      filter: {
        column: "name",
        value: router.query.slug,
        operator: "$eq",
      },
    },
    6
  );
  return (
    <>{topics && topics.length > 0 && <BlogTopic blogs={topics[0]?.blogs} />}</>
  );
};

TopicSlug.Layout = MainLayout;

export default TopicSlug;
