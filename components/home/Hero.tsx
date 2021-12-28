import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Container,
  Link as MuiLink,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import * as React from "react";
import { isMobile } from "react-device-detect";
import { useIntersection } from "../../utils/useIntersection";
import avatar from "../../assets/image/hero3.jpg";
import Image from "next/image";

export interface HeroProps {}

const HeroSection = (props: HeroProps) => {
  const ref = React.useRef(null);
  const inViewport = useIntersection(ref, 0.1);

  return (
    <Box
      component="section"
      pt={{ xs: 4, md: 20 }}
      pb={{ xs: 7, md: 15 }}
      sx={{ position: "relative" }}
      ref={ref}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={{ xs: "center" }}
          justifyContent={{ xs: "center", md: "space-around" }}
        >
          <Stack
            sx={
              inViewport && !isMobile
                ? {
                    "@keyframes fadeFromLeft": {
                      from: { opacity: 0, transform: "translateX(-100px)" },
                      to: { opacity: 1, transform: "translateY(0)" },
                    },
                    animation: "fadeFromLeft 0.5s ease-in-out",
                  }
                : {}
            }
          >
            <Box
              sx={{ maxWidth: { xs: "100%", md: "600px" } }}
              mt={{ xs: 6, md: 0 }}
            >
              <Typography
                component="h1"
                variant="h2"
                sx={{ color: "primary.main" }}
                fontWeight="500"
                textAlign={{ xs: "center", md: "left" }}
              >
                Hà Gia Kính -
              </Typography>
              <Typography
                component="h1"
                variant="h2"
                fontWeight="500"
                textAlign={{ xs: "center", md: "left" }}
              >
                Developer Ha Noi .Viet Nam
              </Typography>
            </Box>
            <Stack
              mt={3}
              direction="row"
              justifyContent={{
                xs: "center",
                md: "flex-start",
              }}
            >
              <Box component="span">
                <Link href="https://www.linkedin.com/in/giakinh0823/" passHref>
                  <MuiLink target="blank">
                    <LinkedInIcon sx={{ fontSize: "3.2rem" }} />
                  </MuiLink>
                </Link>
              </Box>
              <Box component="span" ml={2}>
                <Link href="https://github.com/giakinh0823" passHref>
                  <MuiLink target="blank">
                    <GitHubIcon sx={{ fontSize: "3.2rem" }} />
                  </MuiLink>
                </Link>
              </Box>
            </Stack>
          </Stack>
          <Box
            sx={
              inViewport && !isMobile
                ? {
                    "@keyframes fadeFromRight": {
                      from: { opacity: 0, transform: "translateX(100px)" },
                      to: { opacity: 1, transform: "translateY(0)" },
                    },
                    animation: "fadeFromRight 0.5s ease-in-out",
                  }
                : {}
            }
          >
            <Box
              sx={{
                width: {
                  xs: "320px",
                  md: "420px",
                },
                height: {
                  xs: "320px",
                  md: "420px",
                },
                borderRadius: "100%",
                overflow: "hidden",
              }}
            >
              <Image src={avatar} height={800} width={800} alt="Avatar" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default React.memo(HeroSection);
