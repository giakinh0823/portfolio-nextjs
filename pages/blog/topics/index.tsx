import * as React from "react";
import { MainLayout } from "../../../components/layout/main";
import Seo from '../../../components/common/seo/Seo';

export interface TopicsProps {}

const Topics = (props: TopicsProps) => {
  return (
    <>
      <Seo
        title={`Hà Gia Kính - blog`}
        metaTitle={`Hà Gia Kính - blog`}
        shareImage="https://res.cloudinary.com/giakinh0823/image/upload/v1639473921/thumbnail_cat_882d37503d.webp?updated_at=2021-12-14T09:25:21.760Z"
      />
    </>
  );
};

Topics.Layout = MainLayout;

export default Topics;
