import {
  Container,
  Grid,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export interface IMyBlogProps {
  blogs: any;
}

export default function MyBlog({ blogs }: IMyBlogProps) {
  return (
    <Box component="section" pt={{ xs: 8, md: 8 }} pb={{ xs: 8, md: 8 }}>
      <Container>
        <Box mb={5}>
          <Typography variant="h3" component="h2" fontWeight="900">
            New Blogs
          </Typography>
        </Box>
        <Stack direction="row">
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Grid container spacing={3}>
                    {Boolean(blogs) &&
                      blogs?.slice(0,3)?.map((blog: any) => (
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
                              {blog?.image && (
                                <Image
                                  src={blog?.image}
                                  alt={blog?.title}
                                  width={140}
                                  height={130}
                                />
                              )}
                            </Box>

                            <Box sx={{ padding: "6px 15px" }}>
                              <Link href={`/blog/${blog?.slug}`} passHref>
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
                                    {blog?.title}
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
                                  {blog?.author}
                                </Typography>
                              </Box>
                              <Box sx={{ fontWeight: "500", padding: "0 10px 0 0" }}>
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
                  <video autoPlay loop width="100%" height="100%">
                    <source src={"/video/reactjs.mp4"} type="video/mp4" />
                  </video>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
