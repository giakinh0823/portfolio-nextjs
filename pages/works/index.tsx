import { Box, Typography } from "@mui/material";
import * as React from "react";
import Seo from "../../components/common/seo/Seo";
import { MainLayout } from "../../components/layout/main";

export interface WorksProps {}

const Works = (props: WorksProps) => {
  return (
    <>
      <Seo
        title="Hà Gia Kính - Developer"
        metaTitle="Hà Gia Kính - Developer"
        metaDescription="Hà Gia Kính - Developer. Tôi là một kỹ sư phần mềm chuyên ngành, người đam mê phát triển lấy con người làm trung tâm cũng như ra quyết định chiến lược. Tôi là một nhà phát triển full-stack với niềm đam mê xây dựng giao diện người dùng đẹp, trực quan và hiệu quả."
        shareImage="https://res.cloudinary.com/giakinh0823/image/upload/v1639473921/thumbnail_cat_882d37503d.webp?updated_at=2021-12-14T09:25:21.760Z"
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "50vh",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          🦄 Đang phát triển..
        </Typography>
      </Box>
    </>
  );
};

Works.Layout = MainLayout;

export default Works;
