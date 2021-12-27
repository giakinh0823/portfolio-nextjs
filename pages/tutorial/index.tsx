import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import avatar from '../../assets/image/avatar.png';
import Seo from "../../components/common/seo/Seo";
import { MainLayout } from "../../components/layout/main";

export interface TopicsProps {}

const Tutorial = (props: TopicsProps) => {
  return (
    <>
      <Seo
        title={`Hà Gia Kính - Tutotrial`}
        metaTitle={`Hà Gia Kính - Tutotrial`}
        shareImage={avatar.src}
      />
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: "50vh" }}>
        <Typography variant="h4" component="h1" gutterBottom>🦄 Đang phát triển..</Typography>
      </Box>
    </>
  );
};

Tutorial.Layout = MainLayout;

export default Tutorial;
