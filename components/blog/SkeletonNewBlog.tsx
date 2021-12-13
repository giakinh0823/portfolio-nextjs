import { Skeleton, Stack } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

export interface SkeletonNewBlogProps {}

export default function SkeletonNewBlog(props: SkeletonNewBlogProps) {
  return (
    <Stack direction="row" spacing={2}>
      <Box>
        <Skeleton
          variant="rectangular"
          width={150}
          height={140}
          sx={{ borderRadius: "30px" }}
        />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Skeleton sx={{marginTop: "10px"}}/>
        <Skeleton animation="wave" sx={{ width: "20%", marginBottom: "20px" }}/>
        <Skeleton animation="wave" sx={{ width: "100%" }} />
        <Skeleton animation={false} sx={{ width: "90%" }} />
      </Box>
    </Stack>
  );
}
