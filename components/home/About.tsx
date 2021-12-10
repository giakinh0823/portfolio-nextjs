import { Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { useIntersection } from "../../utils/useIntersection";

export interface AboutProps {}

const AboutSection = (props: AboutProps) => {
  const ref = React.useRef(null);
  const inViewport = useIntersection(ref, 0.1);

  return (
    <Box
      component="section"
      pt={{ xs: 4, md: 20 }}
      pb={{ xs: 7, md: 15 }}
      ref={ref}
      sx={inViewport ? { opacity: 1 } : { opacity: 0 }}
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
              inViewport
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
                width: "420px",
                borderRadius: "40px",
                overflow: "hidden",
              }}
            >
              <video
                autoPlay
                loop
                width="420px"
                height="420px"
                style={{ transform: "scale(1.4)" }}
              >
                <source src={"/video/about2.mp4"} type="video/mp4" />
              </video>
            </Box>
          </Box>
          <Box
            mb={{ xs: 6, md: 0 }}
            sx={
              inViewport
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
            <Typography component="h1" variant="h3">
              <Box component="span" sx={{ color: "primary.main" }}>
                Specialist
              </Box>{" "}
              in creative digital products
            </Typography>
            <Typography
              component="p"
              variant="body1"
              mt={2}
              sx={{ fontSize: "1.3rem" }}
              color="#6c6c6c"
            >
              I am a software engineer major who is passionate about
              people-centered development as well as strategic decision-making.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              mt={2}
              sx={{ fontSize: "1.3rem" }}
              color="#6c6c6c"
            >
              I am a full-stack developer with a passion for building
              beautiful,intuitive, and performant user interfaces.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default React.memo(AboutSection);
