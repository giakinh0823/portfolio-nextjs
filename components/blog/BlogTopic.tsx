import {
  Box,
  Container,
  Grid,
  Link as MuiLink,
  Skeleton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useIntersection } from "../../utils";

export interface IBlogTopicProps {
  blogs: any;
  loadMore: any;
  loading: boolean;
}

const BlogTopic = ({ blogs, loadMore, loading }: IBlogTopicProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inViewport = useIntersection(ref, 0.9);
  const router = useRouter();

  React.useEffect(() => {
    if (inViewport && !loading) {
      loadMore();
    }
  }, [inViewport, loadMore, loading]);

  return (
    <Box component="section" pt={{ xs: 8, md: 8 }} pb={{ xs: 8, md: 15 }}>
      <Container>
        <Box
          mb={16}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box mb={2}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "#5a42ef",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Our Blog
            </Typography>
          </Box>
          <Box maxWidth="500px">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              fontWeight="700"
              textAlign="center"
            >
              {router.query.slug}
            </Typography>
          </Box>
        </Box>
        <Box mb={15}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: "350px",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                {blogs && (
                  <Image
                    src={blogs && blogs[0]?.image}
                    width={600}
                    height={400}
                    alt={blogs[0].title}
                  />
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                {blogs && (
                  <Link href={`/blog/${blogs[0].slug}`} passHref>
                    <MuiLink>
                      <Typography
                        variant="h4"
                        component="h2"
                        gutterBottom
                        sx={{
                          cursor: "pointer",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          fontWeight: "bold",
                        }}
                      >
                        {blogs[0].title}
                      </Typography>
                    </MuiLink>
                  </Link>
                )}
              </Box>
              <Box mb={3}>
                {blogs && (
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{
                      fontSize: "18px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      fontWeight: "bold",
                      opacity: 0.6,
                    }}
                  >
                    {blogs[0].author}
                  </Typography>
                )}
              </Box>
              <Box mb={4}>
                {blogs && (
                  <Typography
                    gutterBottom
                    sx={{
                      fontSize: "18px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {blogs[0].description}
                  </Typography>
                )}
              </Box>
              <Box>
                {blogs && (
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{
                      fontSize: "18px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      fontWeight: "bold",
                      opacity: 0.6,
                    }}
                  >
                    {new Date(blogs[0].createdAt).toLocaleDateString()}
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={6}>
          {Boolean(blogs) &&
            blogs?.map((blog: any) => (
              <Grid item xs={12} sm={6} md={4} key={blog.id}>
                <Box key={blog.id}>
                  <Box
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      borderRadius: "40px",
                      overflow: "hidden",
                    }}
                    mb={1}
                  >
                    <Image
                      src={blog?.image}
                      alt={blog.title}
                      width={500}
                      height={350}
                    />
                  </Box>
                  <Link href={`/blog/${blog?.slug}`} passHref>
                    <MuiLink>
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                          cursor: "pointer",
                          fontWeight: "500",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {blog.title}
                      </Typography>
                    </MuiLink>
                  </Link>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                      fontSize: "15px!important",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      cursor: "pointer",
                      marginBottom: "20px",
                      padding: 0,
                      fontWeight: "600",
                      opacity: 0.6,
                    }}
                    mb={1}
                  >
                    {blog?.author} -{" "}
                    {new Date(blog?.createdAt).toLocaleDateString()}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      fontWeight: "500",
                    }}
                  >
                    {blog.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          {loading &&
            [1, 2, 3]?.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box>
                  <Box>
                    <Skeleton
                      variant="rectangular"
                      width={360}
                      height={240}
                      sx={{ borderRadius: "30px" }}
                    />
                    <Skeleton sx={{ marginTop: "10px" }} />
                    <Skeleton
                      animation="wave"
                      sx={{ width: "60%", marginBottom: "20px" }}
                    />
                    <Skeleton animation="wave" sx={{ width: "100%" }} />
                    <Skeleton animation={false} sx={{ width: "100%" }} />
                  </Box>
                </Box>
              </Grid>
            ))}
        </Grid>
        <div className="load-more" ref={ref}></div>
      </Container>
    </Box>
  );
};

export default React.memo(BlogTopic);
