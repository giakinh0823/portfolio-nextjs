import * as React from "react";
import avatar from '../../assets/image/avatar.png';
import Seo from "../../components/common/seo/Seo";
import { MainLayout } from "../../components/layout/main";
import MyCv from "../../components/works/MyCv";

export interface WorksProps {}

const Works = (props: WorksProps) => {
  return (
    <>
      <Seo
        title="Hà Gia Kính - Developer"
        metaTitle="Hà Gia Kính - Developer"
        metaDescription="Hà Gia Kính - Developer. Tôi là một kỹ sư phần mềm chuyên ngành, người đam mê phát triển lấy con người làm trung tâm cũng như ra quyết định chiến lược. Tôi là một nhà phát triển full-stack với niềm đam mê xây dựng giao diện người dùng đẹp, trực quan và hiệu quả."
        shareImage={avatar.src}
      />
      <MyCv/>
    </>
  );
};

Works.Layout = MainLayout;

export default Works;
