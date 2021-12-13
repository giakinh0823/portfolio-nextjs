import { Box, Container, Typography } from "@mui/material";
import * as React from "react";
import { createReactEditorJS } from "react-editor-js";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { useAppSelector } from "../../app/hooks";
import { selectMode } from "../../redux/mode/modeSlice";
import { vscLightPlus, vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";



export interface IBlogContentProps {
  data: any;
}

const ReactEditorJS = createReactEditorJS();

export default function BlogContent({ data }: IBlogContentProps) {
  const mode = useAppSelector(selectMode);
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
  
        <Box sx={{ "& code": { fontSize: "20px" } }}>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw, remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={mode == "dark" ? vscDarkPlus : vscLightPlus}
                    language={match[1]}
                    PreTag="div"
                    wrapLines={true}
                    {...props}
                    customStyle={{ borderRadius: "10px", fontWeight: "500", padding: "20px" }}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {data?.content}
          </ReactMarkdown>
        </Box>
      </Container>
    </Box>
  );
}
