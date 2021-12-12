import {
  Box,
  Container,
  Grid,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface IListNewProps {
  blogs: any;
}

export default function ListNew({ blogs }: IListNewProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box component="section" pt={{ xs: 8, md: 8 }} pb={{ xs: 8, md: 15 }}>
      <Container>
        <Box mb={5}>
          <Typography variant="h3" component="h2" fontWeight="900">
            List News
          </Typography>
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
                          fontWeight: "700",
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
                      marginBottom: "10px",
                      padding: 0,
                      fontWeight: "400",
                    }}
                    mb={1}
                  >
                    {blog?.author}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      fontWeight: "500",
                    }}
                  >
                    {blog.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
}
