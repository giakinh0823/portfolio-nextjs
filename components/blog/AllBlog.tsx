import {
  Box,
  Container,
  Grid,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// Import Swiper styles
import "swiper/css";

SwiperCore.use([]);

export interface IListNewProps {
  blogs: any;
  title?: string;
  link?: string;
}

export default function AllBlog({ blogs, title, link }: IListNewProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box component="section" pt={{ xs: 3, md: 3 }} pb={{ xs: 3, md: 3 }}>
      <Container>
        <Box mb={5}>
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <Typography variant="h3" component="h2" fontWeight="900">
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
                <Box sx={{display:"flex", alignItems:"center",}}>
                  <Typography
                    variant="body1"
                    component="span"
                    fontWeight="900"
                    fontSize="30px"
                    color="primary"
                  >
                    See
                  </Typography>
                  <ArrowRightAltIcon
                    color="primary"
                    sx={{ fontSize: "30px", fontWeight: "900", marginLeft: "5px" }}
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
                      fontWeight: "600",
                      opacity: 0.6,
                    }}
                    mb={1}
                  >
                    {blog?.author} - {new Date(blog?.createdAt).toLocaleDateString()}
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
