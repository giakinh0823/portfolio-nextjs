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
import { Skeleton } from "@mui/material";

SwiperCore.use([]);

export interface IListNewProps {}

export default function SkeletonAllBlog(props: IListNewProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box component="section" pt={{ xs: 3, md: 3 }} pb={{ xs: 3, md: 3 }}>
      <Container>
        <Box mb={5}>
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <Skeleton
                sx={{
                  width: {
                    xs: "100px",
                    md: "200px",
                  },
                  height: {
                    xs: "20px",
                    md: "30px",
                  },
                }}
              />
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Skeleton
                  sx={{
                    width: {
                      xs: "100px",
                      md: "200px",
                    },
                    height: {
                      xs: "20px",
                      md: "30px",
                    },
                  }}
                />
              </Box>
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
          {[1, 2, 3, 4, 5, 6].map((blog: any, index: number) => (
            <SwiperSlide key={index}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
