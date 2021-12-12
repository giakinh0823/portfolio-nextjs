import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, Link as MuiLink, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import * as React from "react";
import { useIntersection } from "../../utils/useIntersection";
import { isMobile } from "react-device-detect";

export interface HeroProps {}

const HeroSection = (props: HeroProps) => {
  const ref = React.useRef(null);
  const inViewport = useIntersection(ref, 0.1);
 
  return (
    <Box
      component="section"
      pt={{ xs: 4, md: 20 }}
      pb={{ xs: 7, md: 15 }}
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
              (inViewport && !isMobile)
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
              >
                Hà Gia Kính -
              </Typography>
              <Typography component="h1" variant="h2" fontWeight="500">
                Developer from Ha Noi Viet Nam
              </Typography>
            </Box>
            <Box mt={3}>
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
            </Box>
          </Stack>
          <Box
            sx={
              (inViewport && !isMobile)
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
                width: "420px",
                borderRadius: "100%",
                overflow: "hidden",
              }}
            >
              <video
                autoPlay
                loop
                width="420px"
                height="420px"
                style={{ transform: "scale(1.5)" }}
              >
                <source src={"/video/hero.mp4"} type="video/mp4" />
              </video>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default React.memo(HeroSection);
