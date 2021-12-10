import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import developerImage from "../../assets/image/developer.png";
import { useBlogs } from "../swr/useBlog";

export interface IMyBlogProps {}

export default function MyBlog(props: IMyBlogProps) {
  const { blogs } = useBlogs(1);

  return (
    <Box component="section" pt={{ xs: 8, md: 8 }} pb={{ xs: 8, md: 20 }}>
      <Container>
        <Box mb={5}>
          <Typography variant="h3" component="h2">
            News
          </Typography>
        </Box>
        <Stack direction="row">
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Grid container spacing={3}>
                    {blogs?.data.slice(7, 10).map((blog: any) => (
                      <Grid item xs={12} key={blog.id}>
                        <Box display="flex" justifyContent="flex-start">
                          <Box
                            sx={{
                              minWidth: "fit-content",
                              borderRadius: "20px",
                              overflow: "hidden",
                            }}
                          >
                            {blog.thumbnail_cdn && (
                              <Image
                                src={blog.thumbnail_cdn}
                                alt={blog.title}
                                width={120}
                                height={120}
                              />
                            )}
                          </Box>

                          <Box sx={{ padding: "6px 15px" }}>
                            <Link href={`/blog/${blog.slug}`} passHref>
                              <Typography
                                variant="h6"
                                component="h2"
                                sx={{
                                  fontSize: "18px!important",
                                  fontWeight: "bold",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 1,
                                  WebkitBoxOrient: "vertical",
                                  cursor: "pointer",
                                }}
                                mb={1}
                              >
                                {blog.title}
                              </Typography>
                            </Link>
                            <Box
                              sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                              }}
                            >
                              {blog.description
                                ? blog.description
                                : blog.meta_description}
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
                  component="div"
                  sx={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    maxHeight: "450px",
                  }}
                >
                  <Image src={developerImage} alt="developer" height={1000} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}





