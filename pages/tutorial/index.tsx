import * as React from "react";
import { MainLayout } from "../../components/layout/main";
import Seo from "../../components/common/seo/Seo";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export interface TopicsProps {}

const Tutorial = (props: TopicsProps) => {
  return (
    <>
      <Seo
        title={`Hà Gia Kính - Tutotrial`}
        metaTitle={`Hà Gia Kính - Tutotrial`}
        shareImage="https://res.cloudinary.com/giakinh0823/image/upload/v1639473921/thumbnail_cat_882d37503d.webp?updated_at=2021-12-14T09:25:21.760Z"
      />
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: "50vh" }}>
        <Typography variant="h4" component="h1" gutterBottom>🦄 Đang phát triển..</Typography>
      </Box>
    </>
  );
};

Tutorial.Layout = MainLayout;

export default Tutorial;
