import {
  Box,
  Container,
  Link as MuiLink,
  Skeleton,
  Stack,
  Typography
} from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import * as React from "react";
import { isMobile } from "react-device-detect";
import { createReactEditorJS } from "react-editor-js";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  github,
  vscDarkPlus
} from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { useAppSelector } from "../../app/hooks";
import { selectMode } from "../../redux/mode/modeSlice";

export interface IBlogContentProps {
  data: any;
}

const ReactEditorJS = createReactEditorJS();

export default function BlogContent({ data }: IBlogContentProps) {
  const mode = useAppSelector(selectMode);

  return (
    <Box component="section" pt={{ xs: 6, md: 10 }} pb={{ sx: 8, md: 10 }}>
      <Container>
        {data && (
          <>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                fontWeight="bold"
                textAlign={{ xs: "center", md: "left" }}
              >
                {data?.title}
              </Typography>
            </Box>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent={{ xs: "center", md: "space-between" }}
              alignItems={{ xs: "center", md: "flex-start" }}
              mb={5}
              flexWrap="wrap"
            >
              <Box>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ fontSize: "18px" }}
                  textAlign={{ xs: "center", md: "left" }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: "18px",
                      color: "primary.main",
                    }}
                  >
                    {data.author}
                  </Box>
                  {" - " + new Date(data?.createdAt).toLocaleDateString()}
                </Typography>
              </Box>
              <Stack direction="row" spacing={3}>
                {data?.topics.map((topic: any) => (
                  <Link href={`topics/${topic.name}`} passHref key={topic.id}>
                    <MuiLink>
                      <Typography
                        key={topic.id}
                        variant="body1"
                        gutterBottom
                        sx={{ fontSize: "18px" }}
                      >
                        {topic.name}
                      </Typography>
                    </MuiLink>
                  </Link>
                ))}
              </Stack>
            </Stack>

            <Box
              sx={{ "& code": { fontSize: "20px" } }}
              className={clsx("content-markdown", !isMobile && "markdown-body")}
            >
              <ReactMarkdown
                rehypePlugins={[rehypeRaw, remarkGfm]}
                components={{
                  code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={mode == "dark" ? vscDarkPlus : github}
                        language={match[1]}
                        PreTag="div"
                        wrapLines={true}
                        showLineNumbers={true}
                        {...props}
                        customStyle={{
                          borderRadius: "10px",
                          fontWeight: "500",
                          padding: "20px",
                          boxShadow:
                            "0px 100px 80px rgba(0,0,0,0.0174624),0px 41.7776px 33.4221px rgba(0,0,0,0.0235573),0px 22.3363px 17.869px rgba(0,0,0,0.0282784),0px 12.5216px 10.0172px rgba(0,0,0,0.0339075),0px 6.6501px 5.32008px rgba(0,0,0,0.04317),0px 2.76726px 2.21381px rgba(0,0,0,0.07)",
                        }}
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
          </>
        )}
        {!data && (
          <Box>
            <Skeleton sx={{ height: "50px", width: "90%" }} />
            <Skeleton
              sx={{ marginBottom: "30px", height: "50px", width: "70%" }}
            />
            <Skeleton
              sx={{ marginBottom: "40px", height: "40px", width: "30%" }}
            />
            <Skeleton
              variant="rectangular"
              width="70%"
              height={540}
              sx={{ borderRadius: "30px", margin: "0 auto 50px auto" }}
            />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton
              animation="wave"
              sx={{ width: "60%", marginBottom: "20px" }}
            />

            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton
              animation="wave"
              sx={{ width: "60%", marginBottom: "20px" }}
            />
            <Skeleton
              variant="rectangular"
              width="70%"
              height={540}
              sx={{ borderRadius: "30px", margin: "0 auto 50px auto" }}
            />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton
              animation="wave"
              sx={{ width: "60%", marginBottom: "20px" }}
            />

            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton
              animation="wave"
              sx={{ width: "60%", marginBottom: "50px" }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={340}
              sx={{ borderRadius: "30px", margin: "0 auto 50px auto" }}
            />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton
              animation="wave"
              sx={{ width: "60%", marginBottom: "50px" }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={340}
              sx={{ borderRadius: "30px", margin: "0 auto 50px auto" }}
            />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton
              animation="wave"
              sx={{ width: "60%", marginBottom: "50px" }}
            />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton
              animation="wave"
              sx={{ width: "60%", marginBottom: "50px" }}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
}
