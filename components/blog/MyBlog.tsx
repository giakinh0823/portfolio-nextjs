import {
  Container,
  Grid,
  Link as MuiLink,
  Skeleton,
  Stack,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import SkeletonNewBlog from "./SkeletonNewBlog";

export interface IMyBlogProps {
  blogs: any;
  isLoading: any;
}

const MyBlog = ({ blogs, isLoading }: IMyBlogProps) => {
  const [loadingVideo, setLoadingVideo] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      await fetch("/video/about2.mp4").then((res: any) => {
        setLoadingVideo(false);
      });
    })();
    return () => {
      setLoadingVideo(true);
    };
  }, []);

  return (
    <Box component="section" pt={{ xs: 8, md: 8 }} pb={{ xs: 8, md: 8 }}>
      <Container>
        <Box mb={5}>
          <Typography variant="h4" component="h2" fontWeight="700">
            Mới nhất
          </Typography>
        </Box>
        <Stack direction="row">
          <Box sx={{ width: "100%" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{ width: "100%" }}>
                  <Grid container spacing={3}>
                    {(!blogs || isLoading) &&
                      [1, 2, 3].map((item, index) => (
                        <Grid item xs={12} key={index}>
                          <SkeletonNewBlog />
                        </Grid>
                      ))}
                    {(Boolean(blogs) || !isLoading) &&
                      blogs?.slice(0, 3)?.map((blog: any) => (
                        <Grid item xs={12} key={blog.id}>
                          <Box display="flex" justifyContent="flex-start">
                            <Box
                              sx={{
                                minWidth: "fit-content",
                                borderRadius: "20px",
                                overflow: "hidden",
                                maxHeight: "130px",
                              }}
                            >
                              {blog.image ? (
                                <Image
                                  src={blog.image.url}
                                  alt={blog.title}
                                  width={140}
                                  height={130}
                                />
                              ) : (
                                <Skeleton
                                  variant="rectangular"
                                  width={160}
                                  height={240}
                                  sx={{ borderRadius: "30px" }}
                                />
                              )}
                            </Box>

                            <Box sx={{ padding: "6px 15px" }}>
                              <Link href={`/blog/${blog.slug}`} passHref>
                                <MuiLink>
                                  <Typography
                                    variant="h6"
                                    component="h2"
                                    sx={{
                                      fontSize: "18px!important",
                                      fontWeight: "900",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      display: "-webkit-box",
                                      WebkitLineClamp: 1,
                                      WebkitBoxOrient: "vertical",
                                      cursor: "pointer",
                                      margin: 0,
                                      padding: 0,
                                    }}
                                    mb={1}
                                  >
                                    {blog.title}
                                  </Typography>
                                </MuiLink>
                              </Link>
                              <Box>
                                <Typography
                                  variant="h6"
                                  component="h2"
                                  sx={{
                                    fontSize: "14px!important",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    display: "-webkit-box",
                                    WebkitLineClamp: 1,
                                    WebkitBoxOrient: "vertical",
                                    cursor: "pointer",
                                    marginBottom: "10px",
                                    padding: 0,
                                    fontWeight: "400",
                                  }}
                                  mb={1}
                                >
                                  {`${blog.author.last_name} ${blog.author.first_name}`}
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  fontWeight: "500",
                                  padding: "0 10px 0 0",
                                }}
                              >
                                <Box
                                  sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                  }}
                                >
                                  {blog?.description}
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {!loadingVideo ? (
                    <video autoPlay loop width="100%" height="100%">
                      <source src={"/video/reactjs.mp4"} type="video/mp4" />
                    </video>
                  ) : (
                    <Skeleton
                      variant="rectangular"
                      height="100%"
                      width="100%"
                    />
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default MyBlog;
