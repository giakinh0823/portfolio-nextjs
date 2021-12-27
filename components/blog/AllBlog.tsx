import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  Box,
  Container, Link as MuiLink,
  Skeleton,
  Stack,
  Typography
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import SwiperCore from "swiper";
// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";


SwiperCore.use([]);

export interface IListNewProps {
  blogs: any;
  title?: string;
  link?: string;
}

export default function AllBlog({ blogs, title, link }: IListNewProps) {

  return (
    <Box component="section" pt={{ xs: 3, md: 3 }} pb={{ xs: 3, md: 3 }}>
      <Container>
        <Box mb={3}>
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <Typography variant="h4" component="h2" fontWeight="600">
                {title}
              </Typography>
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                  color: "primary.main",
                },
              }}
            >
              <Link href={`${link}`} passHref>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="body1"
                    component="span"
                    fontWeight="600"
                    fontSize="25px"
                    color="primary"
                  >
                    more
                  </Typography>
                  <ArrowRightAltIcon
                    color="primary"
                    sx={{
                      fontSize: "30px",
                      fontWeight: "900",
                      marginLeft: "5px",
                    }}
                  />
                </Box>
              </Link>
            </Box>
          </Stack>
        </Box>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            "0": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "640": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "768": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          {Boolean(blogs) &&
            blogs?.map((blog: any) => (
              <SwiperSlide key={blog.id}>
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
                    {blog.image ? (
                      <Image
                        src={blog.image.url}
                        alt={blog.title}
                        width={500}
                        height={350}
                      />
                    ) : (
                      <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={240}
                        sx={{ borderRadius: "30px" }}
                      />
                    )}
                  </Box>
                  <Link href={`/blog/${blog.slug}`} passHref>
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
                      padding: 0,
                      fontWeight: "600",
                      opacity: 0.6,
                      marginBottom: "20px",
                    }}
                  >
                    {`${blog.author.last_name} ${blog.author.first_name}`} -{" "}
                    {new Date(blog?.created_at).toLocaleDateString()}
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
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </Box>
  );
}
