import { Box, Container, Typography } from "@mui/material";
import * as React from "react";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../../constants/editor-js-tools";

export interface IBlogContentProps {
  data: any;
}

const ReactEditorJS = createReactEditorJS();

export default function BlogContent({ data }: IBlogContentProps) {
  const [blocks, setBlocks] = React.useState({
    time: data?.time,
    version: data?.version,
    blocks: data?.blocks,
  });

  React.useEffect(() => {
    setBlocks({
      time: data?.time,
      version: data?.version,
      blocks: data?.blocks,
    });
  }, [data]);

  return (
    <Box component="section" pt={{ xs: 6, md: 10 }}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }} mb={5}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            {data?.title}
          </Typography>
        </Box>
        <Box component="div" sx={{ fontWeight: "500" }}>
          {blocks.blocks && (
            <ReactEditorJS
              defaultValue={data?.blocks}
              data={blocks}
              tools={EDITOR_JS_TOOLS}
              holder="content"
              hideToolbar={true}
            >
              <Box component="div" id="content" sx={{ fontFamily: "Roboto" }} />
            </ReactEditorJS>
          )}
        </Box>
      </Container>
    </Box>
  );
}
