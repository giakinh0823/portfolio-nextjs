import * as React from "react";
import avatar from '../../../assets/image/avatar.png';
import Seo from '../../../components/common/seo/Seo';
import { MainLayout } from "../../../components/layout/main";

export interface TopicsProps {}

const Topics = (props: TopicsProps) => {
  return (
    <>
      <Seo
        title={`Hà Gia Kính - blog`}
        metaTitle={`Hà Gia Kính - blog`}
        shareImage={avatar.src}
      />
    </>
  );
};

Topics.Layout = MainLayout;

export default Topics;
