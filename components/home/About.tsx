import { Container, Skeleton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { useIntersection } from "../../utils/useIntersection";
import { isMobile } from "react-device-detect";

export interface AboutProps {}

const AboutSection = (props: AboutProps) => {
  const ref = React.useRef(null);
  const inViewport = useIntersection(ref, 0.1);
  const [loadingVideo, setLoadingVideo] = React.useState(true);

  React.useEffect(() => {
    fetch("/video/about2.mp4").then((res: any) => {
      setLoadingVideo(false);
    });
  }, []);

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
          <Box
            px={2}
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
              sx={{
                width: {
                  xs: "320px",
                  md: "420px",
                },
                height: {
                  xs: "320px",
                  md: "420px",
                },
                borderRadius: "40px",
                overflow: "hidden",
              }}
            >
              {!loadingVideo ? (
                <video
                  autoPlay
                  loop
                  width="100%"
                  height="100%"
                  style={{ transform: "scale(1.4)" }}
                >
                  <source src={"/video/about2.mp4"} type="video/mp4" />
                </video>
              ) : (
                <Skeleton variant="rectangular" height="100%" width="100%" />
              )}
            </Box>
          </Box>
          <Box
            mb={{ xs: 6, md: 0 }}
            sx={
              inViewport && !isMobile
                ? {
                    maxWidth: { xs: "100%", md: "550px" },
                    "@keyframes fadeFromRight": {
                      from: { opacity: 0, transform: "translateX(100px)" },
                      to: { opacity: 1, transform: "translateY(0)" },
                    },
                    animation: "fadeFromRight 0.5s ease-in-out",
                  }
                : { maxWidth: { xs: "100%", md: "550px" } }
            }
          >
            <Typography
              display={{ xs: "block", md: "none" }}
              variant="h2"
              component="h2"
              fontWeight="900"
              textAlign="center"
              mb={6}
            >
              Giới thiệu
            </Typography>
            <Typography
              component="h1"
              variant="h3"
              textAlign={{ xs: "center", md: "left" }}
              fontWeight="500"
            >
              <Box
                component="span"
                sx={{ color: "primary.main" }}
                fontWeight="500"
                textAlign={{ xs: "center", md: "left" }}
              >
                Chuyên gia
              </Box>{" "}
              lập trình web app
            </Typography>
            <Typography
              component="p"
              variant="body1"
              mt={2}
              sx={{ fontSize: "1.3rem" }}
              color="#6c6c6c"
              fontWeight="400"
              textAlign={{ xs: "center", md: "left" }}
            >
              Tôi là một kỹ sư phần mềm chuyên ngành, người đam mê phát triển
              lấy con người làm trung tâm cũng như ra quyết định chiến lược.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              mt={2}
              sx={{ fontSize: "1.3rem" }}
              color="#6c6c6c"
              fontWeight="400"
              textAlign={{ xs: "center", md: "left" }}
            >
              Tôi là một nhà phát triển full-stack với niềm đam mê xây dựng giao
              diện người dùng đẹp, trực quan và hiệu quả.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default React.memo(AboutSection);
