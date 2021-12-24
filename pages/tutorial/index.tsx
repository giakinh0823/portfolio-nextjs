import * as React from "react";
import { MainLayout } from "../../components/layout/main";
import Seo from "../../components/common/seo/Seo";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import avatar from '../../assets/image/avatar.png';

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
